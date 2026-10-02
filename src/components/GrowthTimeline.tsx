"use client";

import React from "react";
import Image from "next/image";
import { FARM_TIMELINE } from "@/data/timeline";
import { Sprout, Droplets, Sun, TreePine, PackageCheck, Scissors, CheckCircle2 } from "lucide-react";

const getIcon = (name: string) => {
  switch (name) {
    case "Sprout":
      return <Sprout size={20} color="#2d6a4f" />;
    case "Droplets":
      return <Droplets size={20} color="#0077b6" />;
    case "Sun":
      return <Sun size={20} color="#e09f3e" />;
    case "TreePine":
      return <TreePine size={20} color="#2d6a4f" />;
    case "PackageCheck":
      return <PackageCheck size={20} color="#bc6c25" />;
    case "Scissors":
      return <Scissors size={20} color="#526055" />;
    default:
      return <Sprout size={20} color="#2d6a4f" />;
  }
};

export default function GrowthTimeline() {
  return (
    <section className="section-padding" style={{ backgroundColor: "var(--bg-muted)", position: "relative" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge badge-primary">
            <Sprout size={14} />
            <span>Bahçemizin Yıllık Döngüsü</span>
          </div>
          <h2 className="section-title">Ağaçtan Sofraya Üretim & Gelişim Zaman Çizelgesi</h2>
          <p className="section-subtitle">
            Pınarlık&apos;ta doğanın takvimine uyuyoruz. Kimyasal hızlandırıcılara başvurmadan, her mahsulü kendi mevsiminde ve en doğal döngüsünde yetiştiriyoruz.
          </p>
        </div>

        {/* Timeline Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px"
          }}
        >
          {FARM_TIMELINE.map((item, index) => (
            <div
              key={item.id}
              className="card-organic"
              style={{
                display: "flex",
                flexDirection: "column",
                position: "relative",
                borderTop: item.status === "active" ? "4px solid var(--accent-amber)" : "1px solid var(--border-light)"
              }}
            >
              {/* Image if available */}
              {item.image && (
                <div style={{ position: "relative", height: "180px", width: "100%", backgroundColor: "#e2e8f0" }}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                  <div style={{ position: "absolute", top: "12px", right: "12px" }}>
                    <span className="badge badge-outline" style={{ fontSize: "0.75rem" }}>
                      {item.tag}
                    </span>
                  </div>
                </div>
              )}

              {/* Content */}
              <div style={{ padding: "24px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
                  <div style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    backgroundColor: "var(--primary-50)",
                    padding: "6px 12px",
                    borderRadius: "20px",
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    color: "var(--primary-800)"
                  }}>
                    {getIcon(item.iconName)}
                    <span>{item.period}</span>
                  </div>

                  {item.status === "active" ? (
                    <span className="badge badge-gold pulse-badge" style={{ fontSize: "0.72rem" }}>
                      Şu Anki Dönem
                    </span>
                  ) : item.status === "completed" ? (
                    <span style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "0.75rem", color: "var(--primary-600)", fontWeight: 600 }}>
                      <CheckCircle2 size={14} /> Tamamlandı
                    </span>
                  ) : null}
                </div>

                <h3 style={{ fontSize: "1.2rem", marginBottom: "8px", color: "var(--primary-900)" }}>
                  {item.title}
                </h3>

                <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.6, flexGrow: 1 }}>
                  {item.description}
                </p>

                <div style={{ marginTop: "16px", paddingTop: "12px", borderTop: "1px solid var(--border-subtle)", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.8rem", color: "var(--text-light)" }}>
                  <span>Aşama {index + 1} / {FARM_TIMELINE.length}</span>
                  <span style={{ fontWeight: 600, color: "var(--primary-700)" }}>Pınarlık Bahçesi</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Future Auto-sync Ready Notice */}
        <div
          style={{
            marginTop: "40px",
            padding: "20px 24px",
            borderRadius: "16px",
            backgroundColor: "#ffffff",
            border: "1px dashed var(--border-primary)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div style={{
              width: "40px",
              height: "40px",
              borderRadius: "10px",
              backgroundColor: "var(--primary-100)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--primary-800)"
            }}>
              <Sprout size={22} />
            </div>
            <div>
              <h4 style={{ fontSize: "0.95rem", color: "var(--primary-900)" }}>Canlı Bahçe Güncellemeleri & Fotoğraf Akışı</h4>
              <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                Bahçemizdeki her gelişimi kayıt altına alıyoruz. Güncel durum fotoğraflarını Instagram sayfamızda anlık olarak bulabilirsiniz.
              </p>
            </div>
          </div>

          <a
            href="tel:05323739605"
            className="btn btn-primary"
            style={{ padding: "10px 20px", fontSize: "0.88rem" }}
          >
            <span>Yeni Hasat Bilgisi İçin Arayınız</span>
          </a>
        </div>
      </div>
    </section>
  );
}
