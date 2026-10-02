"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, CheckCircle2, Globe, Send, RefreshCw, ShieldCheck, MapPin, Search, Cpu, ArrowRight } from "lucide-react";
import AdSenseBanner from "@/components/AdSenseBanner";

export default function IndexNowPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    success: boolean;
    message: string;
    submittedUrls?: string[];
    timestamp?: string;
  } | null>(null);

  const siteUrls = [
    "https://www.pinarlik.com/",
    "https://www.pinarlik.com/urunler",
    "https://www.pinarlik.com/hakkimizda",
    "https://www.pinarlik.com/zaman-cizelgesi",
    "https://www.pinarlik.com/galeri",
    "https://www.pinarlik.com/iletisim",
    "https://www.pinarlik.com/indexnow"
  ];

  const handleIndexNowSubmit = async () => {
    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      const res = await fetch("/api/indexnow", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ urls: siteUrls }),
      });

      const data = await res.json();
      setSubmitResult({
        success: data.success ?? true,
        message: data.message || "Tüm sayfalar IndexNow protokolü üzerinden arama motorlarına başarıyla iletildi.",
        submittedUrls: data.submittedUrls || siteUrls,
        timestamp: new Date().toLocaleTimeString("tr-TR")
      });
    } catch (err: any) {
      setSubmitResult({
        success: false,
        message: "İstek gönderilirken bir hata oluştu: " + (err?.message || "Bağlantı hatası"),
        timestamp: new Date().toLocaleTimeString("tr-TR")
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ backgroundColor: "var(--bg-main)", minHeight: "100vh" }}>
      {/* Header Banner */}
      <section style={{
        backgroundColor: "var(--primary-900)",
        color: "#ffffff",
        padding: "60px 0",
        position: "relative"
      }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "860px" }}>
          <div className="badge badge-gold" style={{ marginBottom: "14px" }}>
            <Globe size={14} />
            <span>Arama Motoru & Yapay Zeka Optimizasyonu</span>
          </div>
          <h1 style={{ fontSize: "clamp(2.2rem, 4vw, 3rem)", color: "#ffffff", marginBottom: "14px" }}>
            IndexNow, AEO, GEO & SEO Protokolü
          </h1>
          <p style={{ color: "#cbd5e1", fontSize: "1.05rem", lineHeight: 1.7 }}>
            Pınarlık Doğal Gıda Ürünleri web sitesinin tüm sayfalarını arama motorlarına (Bing, Yandex, Seznam) ve yapay zeka arama motorlarına (ChatGPT, Perplexity, Gemini) anında ileten modern indeksleme merkezi.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container" style={{ maxWidth: "1000px" }}>
          {/* IndexNow Interactive Action Card */}
          <div
            className="card-organic"
            style={{
              padding: "36px",
              marginBottom: "40px",
              border: "2px solid var(--primary-600)",
              background: "linear-gradient(180deg, #ffffff 0%, #f7fbf8 100%)"
            }}
          >
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: "20px", marginBottom: "24px" }}>
              <div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--primary-700)", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase" }}>
                  <Sparkles size={16} /> Anlık İndeks Bildirimi
                </div>
                <h2 style={{ fontSize: "1.6rem", color: "var(--primary-900)", marginTop: "4px" }}>
                  IndexNow ile Tüm Sayfaları Bildir
                </h2>
                <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", marginTop: "6px", maxWidth: "600px" }}>
                  Yeni ürün eklendiğinde, hasat dönemi güncellendiğinde veya fiyat/iletişim değiştiğinde arama botlarının sitenizi beklemeden hemen taramasını sağlayın.
                </p>
              </div>

              <button
                onClick={handleIndexNowSubmit}
                disabled={isSubmitting}
                className="btn btn-gold"
                style={{
                  padding: "16px 32px",
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  boxShadow: "0 4px 15px rgba(201, 138, 44, 0.35)",
                  cursor: isSubmitting ? "not-allowed" : "pointer"
                }}
              >
                {isSubmitting ? (
                  <>
                    <RefreshCw size={18} className="animate-spin" />
                    <span>Gönderiliyor...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Arama Motorlarına Şimdi Bildir</span>
                  </>
                )}
              </button>
            </div>

            {/* Submit Response Banner */}
            {submitResult && (
              <div
                style={{
                  padding: "18px 24px",
                  borderRadius: "14px",
                  backgroundColor: submitResult.success ? "#e8f5e9" : "#ffebee",
                  border: `1px solid ${submitResult.success ? "#81c784" : "#e57373"}`,
                  marginTop: "20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px"
                }}
              >
                <CheckCircle2 size={24} color={submitResult.success ? "#2e7d32" : "#c62828"} />
                <div>
                  <div style={{ fontWeight: 700, color: submitResult.success ? "#1b5e20" : "#b71c1c" }}>
                    {submitResult.message}
                  </div>
                  <div style={{ fontSize: "0.82rem", color: "#555", marginTop: "2px" }}>
                    Son İşlem Zamanı: {submitResult.timestamp} • Toplam {submitResult.submittedUrls?.length || siteUrls.length} URL bildirildi.
                  </div>
                </div>
              </div>
            )}

            {/* URL List */}
            <div style={{ marginTop: "28px" }}>
              <h3 style={{ fontSize: "1rem", color: "var(--primary-900)", marginBottom: "12px", fontWeight: 700 }}>
                📋 İndekslenen Sayfa Listesi ({siteUrls.length} Sayfa):
              </h3>
              <div style={{
                display: "grid",
                gap: "8px",
                backgroundColor: "#ffffff",
                padding: "16px",
                borderRadius: "12px",
                border: "1px solid var(--border-light)"
              }}>
                {siteUrls.map((url, index) => (
                  <div key={index} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "0.9rem", padding: "6px 0", borderBottom: index < siteUrls.length - 1 ? "1px solid var(--border-subtle)" : "none" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--primary-800)", fontFamily: "monospace" }}>
                      <CheckCircle2 size={16} color="#2d6a4f" />
                      <span>{url}</span>
                    </div>
                    <span className="badge badge-primary" style={{ fontSize: "0.72rem" }}>Yayında</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 3 Pillars of Modern Discovery: SEO, AEO, GEO */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
            marginBottom: "40px"
          }}>
            {/* 1. SEO Card */}
            <div className="card-organic" style={{ padding: "28px" }}>
              <div style={{
                width: "50px",
                height: "50px",
                borderRadius: "14px",
                backgroundColor: "var(--primary-100)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--primary-800)",
                marginBottom: "16px"
              }}>
                <Search size={26} />
              </div>
              <h3 style={{ fontSize: "1.2rem", color: "var(--primary-900)", marginBottom: "8px" }}>
                SEO (Search Engine Optimization)
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.6 }}>
                Google ve diğer arama motorları için semantik HTML5 başlık hiyerarşisi, canonical linkler, sitemap.xml, robots.txt ve zengin meta açıklamaları entegre edilmiştir.
              </p>
            </div>

            {/* 2. AEO Card */}
            <div className="card-organic" style={{ padding: "28px" }}>
              <div style={{
                width: "50px",
                height: "50px",
                borderRadius: "14px",
                backgroundColor: "#fef5e7",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#c98a2c",
                marginBottom: "16px"
              }}>
                <Cpu size={26} />
              </div>
              <h3 style={{ fontSize: "1.2rem", color: "var(--primary-900)", marginBottom: "8px" }}>
                AEO (Answer Engine Optimization)
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.6 }}>
                ChatGPT, Perplexity ve Gemini gibi yapay zeka arama motorlarının Pınarlık ürünlerini, ceviz ve erik özelliklerini doğrudan yanıtlayabilmesi için Schema.org FAQ ve Product JSON-LD yapıları kurulmuştur.
              </p>
            </div>

            {/* 3. GEO Card */}
            <div className="card-organic" style={{ padding: "28px" }}>
              <div style={{
                width: "50px",
                height: "50px",
                borderRadius: "14px",
                backgroundColor: "var(--primary-100)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--primary-800)",
                marginBottom: "16px"
              }}>
                <MapPin size={26} />
              </div>
              <h3 style={{ fontSize: "1.2rem", color: "var(--primary-900)", marginBottom: "8px" }}>
                GEO (Geographic SEO & Yerellik)
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.6 }}>
                Denizli, Tavas ve Pınarlık coğrafi koordinatları (`37.5756, 29.0722`), yerel işletme (LocalBusiness) şeması ve bölgesel meta etiketleriyle Ege Bölgesi ve yerel aramalarda ön plana çıkar.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <Link href="/" className="btn btn-outline" style={{ padding: "12px 28px" }}>
              <span>Ana Sayfaya Dön</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
