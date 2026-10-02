"use client";

import React from "react";
import { Phone, MessageCircle } from "lucide-react";

export default function FloatingCallBar() {
  return (
    <aside
      aria-label="Hızlı İletişim Çubuğu"
      className="mobile-floating-bar"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        backgroundColor: "rgba(255, 255, 255, 0.96)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderTop: "1px solid var(--border-light)",
        boxShadow: "0 -4px 20px rgba(0, 0, 0, 0.12)",
        padding: "10px 16px"
      }}
    >
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "10px",
        maxWidth: "500px",
        margin: "0 auto"
      }}>
        <a
          href="tel:05323739605"
          className="btn btn-primary"
          style={{
            padding: "12px 14px",
            fontSize: "0.9rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            borderRadius: "12px"
          }}
        >
          <Phone size={18} />
          <span>Hemen Ara</span>
        </a>

        <a
          href="https://wa.me/905323739605?text=Merhaba,%20P%C4%B1narl%C4%B1k%20Do%C4%9Fal%20G%C4%B1da%20%C3%BCr%C3%BCnleriniz%20ve%20fiyatlar%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-whatsapp"
          style={{
            padding: "12px 14px",
            fontSize: "0.9rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            borderRadius: "12px"
          }}
        >
          <MessageCircle size={18} />
          <span>WhatsApp</span>
        </a>
      </div>

      <style jsx>{`
        @media (min-width: 769px) {
          .mobile-floating-bar {
            display: none !important;
          }
        }
      `}</style>
    </aside>
  );
}
