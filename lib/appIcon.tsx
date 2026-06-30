import { ImageResponse } from "next/og";

// Shared on-brand app icon renderer: navy background with amber "IS" monogram.
// Used by the sized manifest icon route handlers (/icon-192, /icon-512).
export function renderAppIcon(dimension: number) {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0F172A",
          backgroundImage:
            "radial-gradient(circle at 50% 0%, rgba(245,158,11,0.22), rgba(15,23,42,0) 65%)",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: Math.round(dimension * 0.58),
            fontWeight: 800,
            letterSpacing: "-0.04em",
            lineHeight: 1,
            color: "#F59E0B",
          }}
        >
          IS
        </div>
      </div>
    ),
    {
      width: dimension,
      height: dimension,
    }
  );
}
