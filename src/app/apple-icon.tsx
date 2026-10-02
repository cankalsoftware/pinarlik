import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0d2818 0%, #1b4332 50%, #2d6a4f 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "36px",
          border: "4px solid #d4a373",
        }}
      >
        <svg
          width="96"
          height="96"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#d8f3dc"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 20h10" />
          <path d="M10 20c0-7 3-9 8-9" />
          <path d="M14 20c0-4.5-2-7-6-7" />
          <path d="M12 20V10" />
          <path d="M12 10a5 5 0 0 1 5-5c0 3-2 5-5 5Z" fill="#52b788" stroke="#d8f3dc" />
          <path d="M12 14a5 5 0 0 0-5-5c0 3 2 5 5 5Z" fill="#d4a373" stroke="#faedcd" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
