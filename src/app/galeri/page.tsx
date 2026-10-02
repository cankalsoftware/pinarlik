"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Eye, X, ArrowUpRight, Sprout, Phone, MessageCircle, RefreshCw, Sparkles, Heart } from "lucide-react";
import InstagramIcon from "@/components/InstagramIcon";
import { INSTAGRAM_HANDLE, INSTAGRAM_PROFILE_URL, INSTAGRAM_POSTS } from "@/data/instagram";
import { InstagramPost } from "@/types";
import AdSenseBanner from "@/components/AdSenseBanner";

interface GalleryItem {
  id: string;
  title: string;
  category: "ceviz" | "erik" | "bal" | "bahce" | "instagram";
  categoryLabel: string;
  image: string;
  description: string;
  instagramUrl?: string;
  likes?: number;
  comments?: number;
  date?: string;
}

const STATIC_GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g-kelebek-ceviz",
    title: "Ayıklanmış Kelebek İç Ceviz & Taze Ceviz Hasadı",
    category: "ceviz",
    categoryLabel: "Kelebek İç Ceviz",
    image: "/images/ceviz_instagram_2025.jpg",
    description: "Pınarlık bahçelerimizden taze hasat edilmiş, el emeğiyle ayıklanan bembeyaz kelebek iç cevizlerimiz.",
    instagramUrl: "https://www.instagram.com/p/DN_Sq7qjAdA/"
  },
  {
    id: "g-kabuklu-ceviz",
    title: "Yeni Sezon Ceviz Hasadı & Ağaçlarımız",
    category: "ceviz",
    categoryLabel: "Ceviz Hasadı",
    image: "/images/ceviz_hasat_instagram_2026.jpg",
    description: "Yeni sezon ceviz hasadı hazırlıkları; ağaçlarımızdan özenle silkilip toplanan ince kabuklu cevizlerimiz.",
    instagramUrl: "https://www.instagram.com/p/DdQgDS1NPYL/"
  },
  {
    id: "g-ceviz-agaclari",
    title: "Pınarlık Ceviz Bahçemiz ve Ağaçlarımız",
    category: "ceviz",
    categoryLabel: "Ceviz Ağaçları",
    image: "/images/ceviz3_l.jpg",
    description: "Denizli Pınarlık'ta temiz dağ havası ve kaynak sularıyla beslenen ceviz ağaçlarımız.",
    instagramUrl: INSTAGRAM_PROFILE_URL
  },
  {
    id: "g-kuru-erik",
    title: "Güneşte Kurutulmuş Katkısız Doğal Erik",
    category: "erik",
    categoryLabel: "Kuru Erik",
    image: "/images/kuru_erik_dogal.jpg",
    description: "Hiçbir kükürtleme (SO2) ve koruyucu madde olmadan, yalnızca yayla güneşi ve temiz havada kuruyan eriklerimiz.",
    instagramUrl: INSTAGRAM_PROFILE_URL
  },
  {
    id: "g-erik-sergi",
    title: "Güneşte Kurutma Sergimiz",
    category: "erik",
    categoryLabel: "Güneşte Kurutma",
    image: "/images/erik3_l.jpg",
    description: "Eriklerimizin doğal güneş altında geleneksel yöntemlerle kurumaya bırakıldığı sergilerimiz.",
    instagramUrl: INSTAGRAM_PROFILE_URL
  },
  {
    id: "g-taze-erik",
    title: "Erik Bahçemiz ve Dalından Taze Hasat",
    category: "erik",
    categoryLabel: "Erik Hasadı",
    image: "/images/erik2_l.jpg",
    description: "Tam olgunluğunda dalından özenle toplanan tatlı bahçe eriklerimiz.",
    instagramUrl: INSTAGRAM_PROFILE_URL
  },
  {
    id: "g-honeycomb",
    title: "Doğal Karakovan Ham Petek Balı",
    category: "bal",
    categoryLabel: "Ham Petek Balı",
    image: "/images/honeycomb_petek.jpg",
    description: "Yüksek yaylaların kekik ve çam ormanlarından sağılmış, arıların saf ördüğü şifalı ham petek balı.",
    instagramUrl: INSTAGRAM_PROFILE_URL
  },
  {
    id: "g-bal-kavanoz",
    title: "Yayla Çiçek ve Çam Balı (Doğal Ham Bal)",
    category: "bal",
    categoryLabel: "Doğal Ham Bal",
    image: "/images/honeycomb_petek.jpg",
    description: "Isıl işlem görmemiş, saf peteğinden süzülmüş doğal yayla balımız.",
    instagramUrl: INSTAGRAM_PROFILE_URL
  },
  {
    id: "g-sera",
    title: "Pınarlık Doğal Seramız ve Sebzelerimiz",
    category: "bahce",
    categoryLabel: "Doğal Sera",
    image: "/images/sera_l.jpg",
    description: "İlaçsız ve hormonsuz tarımla yetiştirdiğimiz mevsimlik taze köy sebzelerimiz.",
    instagramUrl: INSTAGRAM_PROFILE_URL
  },
  {
    id: "g-goji",
    title: "Bahçemizin Taze Meyveleri ve Goji Berry",
    category: "bahce",
    categoryLabel: "Bahçe Meyveleri",
    image: "/images/goji2_l.jpg",
    description: "Pınarlık bahçemizde doğanın ritmiyle yetişen zengin vitaminli meyvelerimiz.",
    instagramUrl: INSTAGRAM_PROFILE_URL
  },
  {
    id: "g-tarhana-pekmez",
    title: "Geleneksel Ev Tarhanası & Doğal Üzüm Pekmezi",
    category: "bahce",
    categoryLabel: "Köy Kileri",
    image: "/images/tarhana_pekmez.jpg",
    description: "Köyümüzün kadınları tarafından bol köy yoğurdu ve taze sebzelerle yoğrulan ev tarhanası ve odun ateşinde pişirilen doğal pekmezimiz.",
    instagramUrl: INSTAGRAM_PROFILE_URL
  }
];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>(STATIC_GALLERY_ITEMS);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [lastSyncTime, setLastSyncTime] = useState<string>("");

  // Dynamically sync and fetch latest Instagram feed on page mount / refresh
  const syncInstagramFeed = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/instagram");
      const data = await res.json();
      if (data.success && data.posts && data.posts.length > 0) {
        const dynamicInstaItems: GalleryItem[] = data.posts.map((post: InstagramPost) => ({
          id: `insta-${post.id}`,
          title: post.caption.split("!")[0] || post.caption.slice(0, 45) + "...",
          category: "instagram" as const,
          categoryLabel: "Instagram @" + INSTAGRAM_HANDLE,
          image: post.imageUrl,
          description: post.caption,
          instagramUrl: post.postUrl || INSTAGRAM_PROFILE_URL,
          likes: post.likes,
          comments: post.comments,
          date: post.date
        }));

        // Merge dynamic feed items with static categories avoiding duplicates
        const uniqueItems = [...STATIC_GALLERY_ITEMS];
        dynamicInstaItems.forEach(item => {
          if (!uniqueItems.some(u => u.image === item.image)) {
            uniqueItems.push(item);
          }
        });

        setGalleryItems(uniqueItems);
        setLastSyncTime(new Date().toLocaleTimeString("tr-TR"));
      }
    } catch (err) {
      console.error("Gallery Instagram dynamic sync error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    syncInstagramFeed();
  }, []);

  const filteredGallery = activeTab === "all"
    ? galleryItems
    : activeTab === "instagram"
    ? galleryItems.filter(g => g.category === "instagram" || g.instagramUrl)
    : galleryItems.filter(g => g.category === activeTab);

  return (
    <div style={{ backgroundColor: "var(--bg-main)", minHeight: "100vh" }}>
      {/* Header Banner */}
      <section style={{
        backgroundColor: "var(--primary-900)",
        color: "#ffffff",
        padding: "60px 0",
        position: "relative"
      }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "840px" }}>
          <div className="badge badge-gold" style={{ marginBottom: "14px" }}>
            <InstagramIcon size={14} />
            <span>Fotoğraf Galerisi & Dinamik Instagram Akışı</span>
          </div>
          <h1 style={{ fontSize: "clamp(2.2rem, 4vw, 3rem)", color: "#ffffff", marginBottom: "14px" }}>
            Bahçemizden ve Hasattan Güncel Kareler
          </h1>
          <p style={{ color: "#cbd5e1", fontSize: "1.05rem", lineHeight: 1.7 }}>
            Pınarlık&apos;ta kelebek iç ceviz kırımından ince kabuklu ceviz hasadına, güneşte kurutulan erik sergilerinden yayla arılığına kadar tüm üretim aşamalarımız Instagram ile canlı senkronize edilmektedir.
          </p>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "14px", marginTop: "24px", flexWrap: "wrap" }}>
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

            <button
              onClick={syncInstagramFeed}
              disabled={isLoading}
              className="btn btn-outline"
              style={{ padding: "12px 20px", color: "#ffffff", borderColor: "rgba(255,255,255,0.3)" }}
              title="Instagram Görsellerini Güncelle"
            >
              <RefreshCw size={16} className={isLoading ? "animate-spin" : ""} />
              <span>{isLoading ? "Senkronize Ediliyor..." : "Instagram'ı Yenile"}</span>
            </button>
          </div>

          {lastSyncTime && (
            <div style={{ fontSize: "0.8rem", color: "#94a3b8", marginTop: "12px" }}>
              ✓ Son Senkronizasyon: {lastSyncTime} • @{INSTAGRAM_HANDLE}
            </div>
          )}
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
              { id: "ceviz", label: "🌰 Kelebek İç & Kabuklu Ceviz" },
              { id: "erik", label: "☀️ Kuru Erik & Güneş Kurutma" },
              { id: "bal", label: "🍯 Petek Bal & Yayla Arılığı" },
              { id: "bahce", label: "🌿 Sera & Bahçe Yaşamı" },
              { id: "instagram", label: "📸 Canlı Instagram Akışı" },
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
                className="card-organic gallery-card"
                style={{
                  position: "relative",
                  height: "320px",
                  cursor: "pointer",
                  overflow: "hidden",
                  borderRadius: "16px"
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

                {/* Top Badge */}
                <div style={{ position: "absolute", top: "14px", left: "14px", zIndex: 2 }}>
                  <span className="badge badge-primary" style={{ fontSize: "0.75rem", backgroundColor: "rgba(45, 106, 79, 0.9)", color: "#ffffff" }}>
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Instagram Icon Badge */}
                <div style={{
                  position: "absolute",
                  top: "14px",
                  right: "14px",
                  zIndex: 2,
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(0,0,0,0.5)",
                  backdropFilter: "blur(4px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff"
                }}>
                  <InstagramIcon size={16} color="#ffffff" />
                </div>

                {/* Bottom Overlay Info */}
                <div style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  background: "linear-gradient(to top, rgba(13, 40, 24, 0.95) 0%, rgba(13, 40, 24, 0.5) 60%, transparent 100%)",
                  padding: "24px 20px 16px 20px",
                  color: "#ffffff",
                  zIndex: 2
                }}>
                  <h3 style={{ fontSize: "1.1rem", color: "#ffffff", marginBottom: "4px", lineHeight: 1.3 }}>
                    {item.title}
                  </h3>
                  <p style={{
                    fontSize: "0.82rem",
                    color: "#e2e8f0",
                    opacity: 0.9,
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden"
                  }}>
                    {item.description}
                  </p>

                  {item.likes && (
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "8px", fontSize: "0.75rem", color: "#faedcd" }}>
                      <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                        <Heart size={12} fill="#ff4d4f" color="#ff4d4f" /> {item.likes} beğeni
                      </span>
                      {item.date && <span>• {item.date}</span>}
                    </div>
                  )}
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
                backdropFilter: "blur(8px)",
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
                  position: "relative",
                  boxShadow: "0 25px 50px rgba(0,0,0,0.5)"
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
                    justifyContent: "center",
                    cursor: "pointer",
                    border: "none"
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

                <div style={{ padding: "26px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                    <span className="badge badge-primary">
                      {selectedPhoto.categoryLabel}
                    </span>
                    {selectedPhoto.date && (
                      <span style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>
                        {selectedPhoto.date}
                      </span>
                    )}
                  </div>

                  <h3 style={{ fontSize: "1.3rem", color: "var(--primary-900)", margin: "8px 0" }}>
                    {selectedPhoto.title}
                  </h3>

                  <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "22px" }}>
                    {selectedPhoto.description}
                  </p>

                  <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                    <a href="tel:05323739605" className="btn btn-primary" style={{ padding: "12px 22px" }}>
                      <Phone size={16} />
                      <span>Sipariş & Bilgi: 0532 373 96 05</span>
                    </a>

                    <a
                      href={`https://wa.me/905323739605?text=Merhaba,%20P%C4%B1narl%C4%B1k%20galeri%20foto%C4%9Fraf%C4%B1n%C4%B1zdaki%20(${encodeURIComponent(selectedPhoto.title)})%20hakk%C4%B1nda%20bilgi%20ve%20fiyat%20almak%20istiyorum.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp"
                      style={{ padding: "12px 20px" }}
                    >
                      <MessageCircle size={16} />
                      <span>WhatsApp Bilgi</span>
                    </a>

                    <a
                      href={selectedPhoto.instagramUrl || INSTAGRAM_PROFILE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline"
                      style={{ padding: "12px 20px" }}
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
        .gallery-card:hover .gallery-zoom-img {
          transform: scale(1.08);
        }
      `}</style>
    </div>
  );
}
