import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // Solid navy, no transparency — iOS applies its own rounding.
          backgroundColor: "#0F172A",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 104,
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
      ...size,
    }
  );
}
