"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Sayfa Başına Dön"
      title="Başa Dön"
      className="scroll-to-top-btn"
      style={{
        position: "fixed",
        right: "24px",
        bottom: "85px",
        zIndex: 990,
        width: "48px",
        height: "48px",
        borderRadius: "50%",
        backgroundColor: "var(--primary-800)",
        color: "#ffffff",
        border: "2px solid rgba(255, 255, 255, 0.4)",
        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.25)",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        outline: "none"
      }}
    >
      <ArrowUp size={22} strokeWidth={2.5} />

      <style jsx>{`
        .scroll-to-top-btn:hover {
          background-color: var(--primary-600) !important;
          transform: translateY(-4px) scale(1.06);
          box-shadow: 0 8px 24px rgba(45, 106, 79, 0.4) !important;
        }
        .scroll-to-top-btn:active {
          transform: translateY(-1px) scale(0.98);
        }
        @media (max-width: 768px) {
          .scroll-to-top-btn {
            bottom: 80px !important;
            right: 18px !important;
            width: "44px";
            height: "44px";
          }
        }
      `}</style>
    </button>
  );
}
