"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, Phone, MessageCircle } from "lucide-react";
import { FAQ_ITEMS } from "@/data/faq";

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="section-padding" style={{ backgroundColor: "#ffffff" }}>
      <div className="container" style={{ maxWidth: "900px" }}>
        {/* Section Header */}
        <div className="section-header">
          <div className="badge badge-primary">
            <HelpCircle size={14} />
            <span>Merak Edilenler</span>
          </div>
          <h2 className="section-title">Sıkça Sorulan Sorular</h2>
          <p className="section-subtitle">
            Pınarlık doğal ceviz, kuru erik, doğal bal ve mevsimlik ürünlerimiz hakkında merak ettiğiniz tüm soruların cevapları.
          </p>
        </div>

        {/* Accordion list */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                style={{
                  border: "1px solid",
                  borderColor: isOpen ? "var(--primary-600)" : "var(--border-light)",
                  borderRadius: "16px",
                  overflow: "hidden",
                  backgroundColor: isOpen ? "var(--primary-50)" : "var(--bg-card)",
                  transition: "all 0.25s ease"
                }}
              >
                <button
                  onClick={() => toggle(item.id)}
                  style={{
                    width: "100%",
                    padding: "20px 24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "16px",
                    textAlign: "left",
                    color: isOpen ? "var(--primary-900)" : "var(--text-main)",
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    cursor: "pointer"
                  }}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <div
                    style={{
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                      color: isOpen ? "var(--primary-700)" : "var(--text-muted)",
                      flexShrink: 0
                    }}
                  >
                    <ChevronDown size={20} />
                  </div>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: "0 24px 22px 24px",
                      color: "var(--text-muted)",
                      fontSize: "0.95rem",
                      lineHeight: 1.7,
                      borderTop: "1px solid rgba(45, 106, 79, 0.1)",
                      paddingTop: "14px"
                    }}
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Extra contact helper */}
        <div
          style={{
            marginTop: "40px",
            textAlign: "center",
            padding: "28px",
            borderRadius: "20px",
            backgroundColor: "var(--bg-muted)",
            border: "1px solid var(--border-light)"
          }}
        >
          <h3 style={{ fontSize: "1.2rem", marginBottom: "8px", color: "var(--primary-900)" }}>
            Başka bir sorunuz mu var?
          </h3>
          <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", marginBottom: "18px" }}>
            Tüm ürünler ve toplu sipariş koşulları için bizi dilediğiniz zaman arayabilir veya mesaj yazabilirsiniz.
          </p>
          <div style={{ display: "inline-flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
            <a href="tel:05323739605" className="btn btn-primary" style={{ padding: "11px 22px" }}>
              <Phone size={16} />
              <span>0532 373 96 05</span>
            </a>
            <a
              href="https://wa.me/905323739605?text=Merhaba,%20bir%20sorum%20vard%C4%B1."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ padding: "11px 22px" }}
            >
              <MessageCircle size={16} />
              <span>WhatsApp&apos;tan Yazın</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
