"use client";

import React, { useEffect } from "react";

interface AdSenseBannerProps {
  slotId?: string;
  format?: "auto" | "fluid" | "rectangle" | "horizontal";
  responsive?: boolean;
  className?: string;
}

export default function AdSenseBanner({
  slotId = "default-slot",
  format = "auto",
  responsive = true,
  className = "",
}: AdSenseBannerProps) {
  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        ((window as unknown as { adsbygoogle: unknown[] }).adsbygoogle =
          (window as unknown as { adsbygoogle: unknown[] }).adsbygoogle || []).push({});
      }
    } catch (err) {
      console.error("AdSense error:", err);
    }
  }, []);

  return (
    <div
      className={`adsense-wrapper ${className}`}
      style={{
        margin: "24px 0",
        textAlign: "center",
        overflow: "hidden",
        minHeight: "90px",
        backgroundColor: "rgba(0,0,0,0.02)",
        borderRadius: "12px",
        padding: "8px",
        border: "1px dashed var(--border-light)"
      }}
    >
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-0334661948018289"
        data-ad-slot={slotId}
        data-ad-format={format}
        data-full-width-responsive={responsive ? "true" : "false"}
      />
    </div>
  );
}
