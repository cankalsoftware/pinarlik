"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, MessageCircle, Sprout, Filter, Sparkles, ShieldCheck, HeartPulse, Truck } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import AdSenseBanner from "@/components/AdSenseBanner";
import { PRODUCTS } from "@/data/products";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "Tüm Ürünler" },
    { id: "ceviz", label: "Ceviz Çeşitleri (Kabuklu & İç)" },
    { id: "kuru-meyve", label: "Kurutulmuş Meyveler" },
    { id: "bal", label: "Doğal Bal" },
    { id: "mevsimlik", label: "Mevsimlik Taze Mahsuller" },
    { id: "koy-urunleri", label: "Köy Kileri & Tarhana" },
  ];

  const filteredProducts = activeCategory === "all"
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

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
            <Sprout size={14} />
            <span>%100 Doğal & Yerli Mahsuller</span>
          </div>
          <h1 style={{ fontSize: "clamp(2.2rem, 4vw, 3rem)", color: "#ffffff", marginBottom: "14px" }}>
            Pınarlık Doğal Ürünlerimiz
          </h1>
          <p style={{ color: "#cbd5e1", fontSize: "1.05rem", lineHeight: 1.7 }}>
            Denizli Pınarlık bahçelerimizde geleneksel yöntemlerle yetiştirdiğimiz yeni sezon ince kabuklu ceviz, kelebek ayıklanmış iç ceviz, kükürtsüz kuru erik ve doğal bal çeşitlerimiz.
          </p>

          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            backgroundColor: "rgba(255,255,255,0.1)",
            padding: "10px 20px",
            borderRadius: "30px",
            marginTop: "20px",
            fontSize: "0.9rem",
            color: "#faedcd"
          }}>
            <Phone size={16} />
            <span>Toptan ve perakende sipariş & güncel fiyatlar için: <strong>0532 373 96 05</strong></span>
          </div>
        </div>
      </section>

      {/* Main Catalog Area */}
      <div className="container" style={{ padding: "50px 20px" }}>
        {/* Category Filter Pills */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "10px",
          marginBottom: "40px"
        }}>
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: "10px 20px",
                  borderRadius: "24px",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  backgroundColor: isActive ? "var(--primary-700)" : "#ffffff",
                  color: isActive ? "#ffffff" : "var(--text-main)",
                  border: isActive ? "1px solid var(--primary-700)" : "1px solid var(--border-light)",
                  boxShadow: isActive ? "0 4px 12px rgba(45, 106, 79, 0.25)" : "var(--shadow-sm)",
                  transition: "all 0.2s ease",
                  cursor: "pointer"
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Product Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "28px",
          marginBottom: "60px"
        }}>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Product Ordering & Terroir Info Box */}
        <div style={{
          backgroundColor: "#ffffff",
          borderRadius: "24px",
          padding: "40px",
          border: "1px solid var(--border-light)",
          boxShadow: "var(--shadow-sm)",
          marginBottom: "40px"
        }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px"
          }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                <HeartPulse size={24} color="var(--primary-700)" />
                <h3 style={{ fontSize: "1.25rem", color: "var(--primary-900)" }}>Ceviz ve Kuru Eriğin Faydaları</h3>
              </div>
              <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: 1.7 }}>
                Doğal ceviz, zengin Omega-3 yağ asitleri, E vitamini ve antioksidanlarıyla kalp ve beyin sağlığını destekler. Güneşte katkısız kurutulmuş eriklerimiz ise lifli yapısıyla sindirimi kolaylaştırır, demir ve potasyum deposudur.
              </p>
            </div>

            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                <ShieldCheck size={24} color="var(--primary-700)" />
                <h3 style={{ fontSize: "1.25rem", color: "var(--primary-900)" }}>Neden Fiyat Yazmıyoruz?</h3>
              </div>
              <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: 1.7 }}>
                Ürünlerimiz fabrikasyon değil, doğrudan bahçemizden çıkan doğal mahsullerdir. Sipariş miktarınıza (toptan çuvallı veya perakende kiloluk) ve güncel hasat durumuna göre en taze ve uygun fiyatı doğrudan telefonda sunuyoruz.
              </p>
            </div>

            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                <Truck size={24} color="var(--primary-700)" />
                <h3 style={{ fontSize: "1.25rem", color: "var(--primary-900)" }}>Türkiye Geneli Güvenli Gönderim</h3>
              </div>
              <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: 1.7 }}>
                Siparişleriniz kırılmaya ve neme karşı koruyucu özel ambalajlarda hazırlanıp anlaşmalı kargoyla Türkiye&apos;nin her yerine güvenle teslim edilir.
              </p>
            </div>
          </div>

          <div style={{
            marginTop: "30px",
            paddingTop: "24px",
            borderTop: "1px solid var(--border-subtle)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "20px"
          }}>
            <div>
              <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--primary-900)" }}>
                Sipariş ve Toptan Fiyat Teklifi İçin Hemen Arayın:
              </div>
              <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                Haftanın 7 günü 08:00 - 21:00 saatleri arasında hizmetinizdeyiz.
              </div>
            </div>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="tel:05323739605" className="btn btn-primary" style={{ padding: "12px 24px" }}>
                <Phone size={18} />
                <span>0532 373 96 05</span>
              </a>
              <a
                href="https://wa.me/905323739605?text=Merhaba,%20P%C4%B1narl%C4%B1k%20Do%C4%9Fal%20G%C4%B1da%20%C3%BCr%C3%BCnleriniz%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ padding: "12px 24px" }}
              >
                <MessageCircle size={18} />
                <span>WhatsApp Sipariş</span>
              </a>
            </div>
          </div>
        </div>

        {/* AdSense Unit */}
        <AdSenseBanner />
      </div>
    </div>
  );
}
