import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { getServiceBySlug } from "@/lib/services";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "sk_test_placeholder", {
  apiVersion: "2026-05-27.dahlia",
});

export async function POST(request: NextRequest) {
  try {
    const { slug, lang } = await request.json();

    const service = getServiceBySlug(slug);
    if (!service) {
      return NextResponse.json({ error: "Service not found" }, { status: 404 });
    }

    const serviceName = lang === "es" ? service.nameES : service.nameEN;

    const origin = request.headers.get("origin") ?? "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: serviceName,
              description:
                lang === "es"
                  ? `Servicio de inmigración: ${serviceName} — ImmigrationSpain`
                  : `Immigration service: ${serviceName} — ImmigrationSpain`,
              images: [],
            },
            unit_amount: service.price * 100, // Stripe expects cents
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${origin}/services/${slug}?success=true${lang === "es" ? "&lang=es" : ""}`,
      cancel_url: `${origin}/services/${slug}?cancelled=true${lang === "es" ? "&lang=es" : ""}`,
      metadata: {
        service_slug: slug,
        lang: lang ?? "en",
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
