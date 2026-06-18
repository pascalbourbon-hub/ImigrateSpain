import { ImageResponse } from "next/og";

export const alt = "ImmigrationSpain — Expert Immigration Lawyers in Spain";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0F172A",
          backgroundImage:
            "radial-gradient(circle at 50% 0%, rgba(245,158,11,0.18), rgba(15,23,42,0) 60%)",
          padding: "80px",
        }}
      >
        {/* Scale of justice mark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 64,
            marginBottom: 24,
          }}
        >
          ⚖️
        </div>

        {/* Wordmark */}
        <div
          style={{
            display: "flex",
            fontSize: 92,
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1,
          }}
        >
          <span style={{ color: "#FFFFFF" }}>Immigration</span>
          <span style={{ color: "#F59E0B" }}>Spain</span>
        </div>

        {/* Tagline */}
        <div
          style={{
            display: "flex",
            color: "#CBD5E1",
            fontSize: 40,
            fontWeight: 500,
            marginTop: 28,
          }}
        >
          Expert Immigration Lawyers in Spain
        </div>

        {/* Trust signals */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            color: "#F59E0B",
            fontSize: 28,
            fontWeight: 600,
            letterSpacing: "0.04em",
            marginTop: 56,
            borderTop: "1px solid rgba(148,163,184,0.25)",
            paddingTop: 32,
          }}
        >
          NIE · Visas · Residency · Nationality
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
