import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Curiosity Labs — What if it's possible?";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    <div
      style={{
        background:
          "linear-gradient(135deg, #0f0f0f 0%, #1e1b4b 50%, #0f0f0f 100%)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px",
        fontFamily: "sans-serif",
      }}
    >
      {/* Question mark */}
      <div
        style={{
          fontSize: "120px",
          fontWeight: 900,
          background: "linear-gradient(135deg, #818cf8, #a78bfa, #c084fc)",
          backgroundClip: "text",
          color: "transparent",
          marginBottom: "16px",
          lineHeight: 1,
        }}
      >
        ?
      </div>

      {/* Name */}
      <div
        style={{
          fontSize: "64px",
          fontWeight: 800,
          color: "#ffffff",
          letterSpacing: "-1px",
          marginBottom: "20px",
        }}
      >
        Curiosity Labs
      </div>

      {/* Tagline */}
      <div
        style={{
          fontSize: "28px",
          color: "rgba(255,255,255,0.7)",
          textAlign: "center",
          maxWidth: "800px",
          lineHeight: 1.4,
          fontWeight: 400,
        }}
      >
        A technology hub solving Africa&apos;s problems through innovation
      </div>

      {/* Pillars */}
      <div
        style={{
          display: "flex",
          gap: "48px",
          marginTop: "56px",
        }}
      >
        {[
          { icon: "🛠", label: "Build Solutions" },
          { icon: "🚀", label: "Invest in Startups" },
          { icon: "🤖", label: "Custom AI" },
        ].map((item) => (
          <div
            key={item.label}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span style={{ fontSize: "36px" }}>{item.icon}</span>
            <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "18px" }}>
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>,
    size,
  );
}
