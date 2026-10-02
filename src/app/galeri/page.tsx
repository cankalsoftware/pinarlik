"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Eye, X, ArrowUpRight, Sprout, Phone, MessageCircle, Filter } from "lucide-react";
import InstagramIcon from "@/components/InstagramIcon";
import { INSTAGRAM_POSTS, INSTAGRAM_HANDLE, INSTAGRAM_PROFILE_URL } from "@/data/instagram";
import AdSenseBanner from "@/components/AdSenseBanner";

interface GalleryItem {
  id: string;
  title: string;
  category: "ceviz" | "erik" | "bal" | "bahce";
  categoryLabel: string;
  image: string;
  description: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Ağaçtan Taze Silkelenmiş Kabuklu Cevizler",
    category: "ceviz",
    categoryLabel: "Ceviz Hasadı",
    image: "/images/ceviz_l.jpg",
    description: "Hasat anında yeşil kabuğundan ayrılan ve kurumaya alınan yeni sezon kabuklu cevizlerimiz."
  },
  {
    id: "g2",
    title: "Pınarlık Ceviz Bahçemiz ve Ağaçlarımız",
    category: "ceviz",
    categoryLabel: "Ceviz Ağaçları",
    image: "/images/ceviz3_l.jpg",
    description: "Denizli Pınarlık'ta temiz dağ havası ve kaynak sularıyla beslenen ceviz ağaçlarımız."
  },
  {
    id: "g3",
    title: "Ege Güneşinde Doğal Kuruyan Kuru Erikler",
    category: "erik",
    categoryLabel: "Güneşte Kurutma",
    image: "/images/erik.jpg",
    description: "Kükürtsüz ve katkısız olarak yayla rüzgarında kurutulan doğal koyu eriklerimiz."
  },
  {
    id: "g4",
    title: "Erik Bahçemiz ve Taze Hasat Anı",
    category: "erik",
    categoryLabel: "Erik Hasadı",
    image: "/images/erik2_l.jpg",
    description: "Tam olgunluğunda dalından özenle toplanan tatlı bahçe eriklerimiz."
  },
  {
    id: "g5",
    title: "Güneşte Kurutma Sergisi",
    category: "erik",
    categoryLabel: "Doğal Sergiler",
    image: "/images/erik3_l.jpg",
    description: "Eriklerimizin hiçbir kimyasal koruyucu olmadan güneş altında kurumaya bırakıldığı sergilerimiz."
  },
  {
    id: "g6",
    title: "Yayla Çiçek ve Çam Balımız",
    category: "bal",
    categoryLabel: "Doğal Bal",
    image: "/images/bal_l.jpg",
    description: "Yüksek rakımlı yayla florasından sağılan saf, ısıtılmamış ham balımız."
  },
  {
    id: "g7",
    title: "Doğal Ham Petek Balı",
    category: "bal",
    categoryLabel: "Petek Balı",
    image: "/images/bal2_l.jpg",
    description: "Arılarımızın saf peteğiyle kavanozlanan şifalı doğal petek balımız."
  },
  {
    id: "g8",
    title: "Pınarlık Doğal Seramız ve Sebzelerimiz",
    category: "bahce",
    categoryLabel: "Doğal Sera",
    image: "/images/sera_l.jpg",
    description: "İlaçsız ve hormonsuz tarımla yetiştirdiğimiz mevsimlik taze sebzelerimiz."
  },
  {
    id: "g9",
    title: "Bahçemizin Taze Meyveleri ve Goji Berry",
    category: "bahce",
    categoryLabel: "Bahçe Meyveleri",
    image: "/images/goji2_l.jpg",
    description: "Pınarlık bahçemizde doğanın ritmiyle yetişen zengin vitaminli meyvelerimiz."
  }
];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const filteredGallery = activeTab === "all"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((g) => g.category === activeTab);

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
            <InstagramIcon size={14} />
            <span>Fotoğraf Galerisi & Canlı Akış</span>
          </div>
          <h1 style={{ fontSize: "clamp(2.2rem, 4vw, 3rem)", color: "#ffffff", marginBottom: "14px" }}>
            Bahçemizden Kareler & Hasat Anları
          </h1>
          <p style={{ color: "#cbd5e1", fontSize: "1.05rem", lineHeight: 1.7 }}>
            Pınarlık&apos;ta ceviz ağaçlarımızın gelişiminden hasat coşkusuna, güneşte erik kurutmadan yayla arılığına kadar tüm anlarımızı fotoğraflarla keşfedin.
          </p>

          <div style={{ marginTop: "24px" }}>
            <a
              href={INSTAGRAM_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
              style={{ padding: "12px 26px" }}
            >
              <InstagramIcon size={18} />
              <span>Instagram: @{INSTAGRAM_HANDLE}</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding">
        <div className="container">
          {/* Category Filter */}
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "10px",
            marginBottom: "40px"
          }}>
            {[
              { id: "all", label: "Tüm Fotoğraflar" },
              { id: "ceviz", label: "🌰 Ceviz Bahçesi & Hasat" },
              { id: "erik", label: "☀️ Kuru Erik & Güneş Kurutma" },
              { id: "bal", label: "🍯 Doğal Bal & Petek" },
              { id: "bahce", label: "🌿 Sera & Bahçe Yaşamı" },
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    padding: "10px 20px",
                    borderRadius: "24px",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    backgroundColor: isActive ? "var(--primary-700)" : "#ffffff",
                    color: isActive ? "#ffffff" : "var(--text-main)",
                    border: isActive ? "1px solid var(--primary-700)" : "1px solid var(--border-light)",
                    boxShadow: "var(--shadow-sm)",
                    cursor: "pointer",
                    transition: "all 0.2s ease"
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Photo Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "24px",
            marginBottom: "50px"
          }}>
            {filteredGallery.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedPhoto(item)}
                className="card-organic"
                style={{
                  position: "relative",
                  height: "300px",
                  cursor: "pointer",
                  overflow: "hidden"
                }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: "cover", transition: "transform 0.4s ease" }}
                  className="gallery-zoom-img"
                />

                <div style={{ position: "absolute", top: "14px", left: "14px", zIndex: 2 }}>
                  <span className="badge badge-outline" style={{ fontSize: "0.75rem" }}>
                    {item.categoryLabel}
                  </span>
                </div>

                <div style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  background: "linear-gradient(to top, rgba(13, 40, 24, 0.95) 0%, rgba(13, 40, 24, 0.4) 60%, transparent 100%)",
                  padding: "24px 20px 16px 20px",
                  color: "#ffffff",
                  zIndex: 2
                }}>
                  <h3 style={{ fontSize: "1.1rem", color: "#ffffff", marginBottom: "4px" }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "0.82rem", color: "#e2e8f0", opacity: 0.9 }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox Modal */}
          {selectedPhoto && (
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0,0,0,0.85)",
                backdropFilter: "blur(6px)",
                zIndex: 2000,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px"
              }}
              onClick={() => setSelectedPhoto(null)}
            >
              <div
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "20px",
                  maxWidth: "800px",
                  width: "100%",
                  overflow: "hidden",
                  position: "relative"
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedPhoto(null)}
                  aria-label="Kapat"
                  style={{
                    position: "absolute",
                    top: "14px",
                    right: "14px",
                    zIndex: 10,
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(0,0,0,0.6)",
                    color: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <X size={18} />
                </button>

                <div style={{ position: "relative", height: "420px", width: "100%", backgroundColor: "#000" }}>
                  <Image
                    src={selectedPhoto.image}
                    alt={selectedPhoto.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>

                <div style={{ padding: "24px" }}>
                  <span className="badge badge-primary" style={{ marginBottom: "8px" }}>
                    {selectedPhoto.categoryLabel}
                  </span>
                  <h3 style={{ fontSize: "1.3rem", color: "var(--primary-900)", marginTop: "6px", marginBottom: "8px" }}>
                    {selectedPhoto.title}
                  </h3>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "20px" }}>
                    {selectedPhoto.description}
                  </p>

                  <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                    <a href="tel:05323739605" className="btn btn-primary" style={{ padding: "10px 20px" }}>
                      <Phone size={16} />
                      <span>Sipariş & Bilgi (0532 373 96 05)</span>
                    </a>
                    <a
                      href={INSTAGRAM_PROFILE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline"
                      style={{ padding: "10px 20px" }}
                    >
                      <InstagramIcon size={16} />
                      <span>Instagram&apos;da Gör</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          <AdSenseBanner />
        </div>
      </section>

      <style jsx>{`
        .gallery-zoom-img:hover {
          transform: scale(1.08);
        }
      `}</style>
    </div>
  );
}
