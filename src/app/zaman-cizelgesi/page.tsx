import React from "react";
import Link from "next/link";
import { Sprout, Phone, MessageCircle, Calendar, Sparkles, ArrowRight } from "lucide-react";
import GrowthTimeline from "@/components/GrowthTimeline";
import AdSenseBanner from "@/components/AdSenseBanner";

export const metadata = {
  title: "Zaman Çizelgesi & Bahçe Gelişimi",
  description: "Pınarlık bahçelerimizin yıllık doğal üretim takvimi: İlkbahar uyanışından güneşte kurutmaya, ceviz hasadından sofranıza uzanan yolculuk."
};

export default function TimelinePage() {
  return (
    <div style={{ backgroundColor: "var(--bg-main)", minHeight: "100vh" }}>
      {/* Header Banner */}
      <section style={{
        backgroundColor: "var(--primary-900)",
        color: "#ffffff",
        padding: "60px 0",
        position: "relative"
      }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "800px" }}>
          <div className="badge badge-gold" style={{ marginBottom: "14px" }}>
            <Calendar size={14} />
            <span>Doğanın Takvimi</span>
          </div>
          <h1 style={{ fontSize: "clamp(2.2rem, 4vw, 3rem)", color: "#ffffff", marginBottom: "14px" }}>
            Bahçemizin Hasat & Gelişim Zaman Çizelgesi
          </h1>
          <p style={{ color: "#cbd5e1", fontSize: "1.05rem", lineHeight: 1.7 }}>
            Ağaçlarımızın bahar aylarında çiçeklenmesinden yaz güneşinde erik kurutmaya, sonbahar ceviz hasadından kış dinlenmesine kadar tüm süreçlerimiz.
          </p>
        </div>
      </section>

      {/* Main Timeline Component */}
      <GrowthTimeline />

      {/* Action CTA */}
      <section style={{ backgroundColor: "#ffffff", padding: "60px 0" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "700px" }}>
          <h3 style={{ fontSize: "1.8rem", color: "var(--primary-900)", marginBottom: "14px" }}>
            Yeni Sezon Mahsullerimizden Ayırtın
          </h3>
          <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "28px" }}>
            Hasat dönemlerinde en taze ceviz ve güneşte kurutulmuş erik mahsulünü ilk alanlardan olmak için bizimle doğrudan iletişime geçebilirsiniz.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
            <a href="tel:05323739605" className="btn btn-primary" style={{ padding: "14px 30px" }}>
              <Phone size={18} />
              <span>0532 373 96 05</span>
            </a>
            <a
              href="https://wa.me/905323739605?text=Merhaba,%20yeni%20sezon%20hasat%20tarihleri%20ve%20sipari%C5%9F%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ padding: "14px 30px" }}
            >
              <MessageCircle size={18} />
              <span>WhatsApp Sipariş</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
