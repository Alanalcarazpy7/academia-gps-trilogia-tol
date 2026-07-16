import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "linear-gradient(155deg, #012136 0%, #004877 52%, #01121e 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <div
            style={{
              display: "flex",
              height: "14px",
              width: "14px",
              borderRadius: "999px",
              background: "#E6C619",
            }}
          />
          <div style={{ color: "#E6C619", fontSize: 28, fontWeight: 800, letterSpacing: 4 }}>
            ACADEMIA GPS
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          <div
            style={{
              display: "flex",
              color: "#ffffff",
              fontSize: 78,
              fontWeight: 800,
              lineHeight: 1.08,
              maxWidth: 980,
            }}
          >
            La Trilogia TOL
          </div>
          <div
            style={{
              display: "flex",
              color: "rgba(255,255,255,0.82)",
              fontSize: 32,
              fontWeight: 500,
              maxWidth: 880,
              lineHeight: 1.35,
            }}
          >
            Formacion ejecutiva en finanzas, marketing y liderazgo para dirigir
            tu clinica con vision empresarial.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div style={{ display: "flex", height: "6px", width: "80px", background: "#E6C619", borderRadius: "999px" }} />
          <div style={{ display: "flex", height: "6px", width: "80px", background: "#008080", borderRadius: "999px" }} />
          <div style={{ display: "flex", height: "6px", width: "80px", background: "#76A858", borderRadius: "999px" }} />
        </div>
      </div>
    ),
    { ...size },
  );
}
