import { ImageResponse } from "next/og";

export const alt = "Doomsday — a curated Marvel watch guide";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "88px",
          background: "radial-gradient(circle at 82% 18%, #203c24 0%, #0b100c 42%, #050706 100%)",
          color: "#f5f0e8",
          fontFamily: "Arial",
        }}
      >
        <div style={{ color: "#7cff62", fontSize: 22, letterSpacing: 9, fontWeight: 700 }}>
          THE ROAD TO
        </div>
        <div style={{ marginTop: 18, fontSize: 104, lineHeight: 0.95, fontWeight: 900, letterSpacing: -5 }}>
          DOOMSDAY
        </div>
        <div style={{ marginTop: 34, fontSize: 30, color: "#c2c9c1" }}>
          Your curated Marvel watch guide
        </div>
        <div style={{ marginTop: 50, height: 4, width: 180, background: "#7cff62" }} />
        <div style={{ position: "absolute", right: 88, bottom: 54, color: "#8a938b", fontSize: 18 }}>
          doomsday-six-blond.vercel.app
        </div>
      </div>
    ),
    { ...size }
  );
}
