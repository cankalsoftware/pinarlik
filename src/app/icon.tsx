import { ImageResponse } from "next/og";

export const size = {
  width: 48,
  height: 48,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: "linear-gradient(135deg, #1b4332 0%, #2d6a4f 60%, #40916c 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "14px",
          border: "2px solid #d4a373",
        }}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#d8f3dc"
          strokeWidth="2.5"
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
