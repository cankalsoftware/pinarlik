"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, MessageCircle, ChevronLeft, ChevronRight, ShieldCheck, Sparkles, Sprout } from "lucide-react";

interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  tagline: string;
  badge: string;
  image: string;
  primaryCtaText: string;
  primaryCtaLink: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    title: "Pınarlık Doğal Gıda Ürünleri",
    subtitle: "Denizli Pınarlık'ın bereketli topraklarından ince kabuklu ceviz, ayıklanmış kelebek iç ceviz ve güneşte kurutulmuş doğal erik.",
    tagline: "Doğrudan Bahçemizden • Katkısız & Yerli Üretim",
    badge: "Orijinal Pınarlık Mahsulleri",
    image: "/images/ceviz3_l.jpg",
    primaryCtaText: "Tüm Ürünleri İncele",
    primaryCtaLink: "/urunler"
  },
  {
    id: 2,
    title: "Yeni Sezon Doğal İnce Kabuklu & İç Ceviz",
    subtitle: "Ağaçlarımızdan yeni hasat edilmiş, ince kabuklu, elle kolay kırılan dolgun cevizlerimiz ve yemeye hazır kelebek iç cevizlerimiz.",
    tagline: "100% Yerli • İlaçsız ve Kimyasalsız Geleneksel Tarım",
    badge: "2026 Yeni Sezon Ceviz Hasadı",
    image: "/images/ic_ceviz_kelebek.jpg",
    primaryCtaText: "Ceviz Çeşitlerini İncele",
    primaryCtaLink: "/urunler#kelebek-ic-ceviz"
  },
  {
    id: 3,
    title: "Güneşte Kurutulmuş Katkısız Doğal Erik",
    subtitle: "Ege güneşi altında kükürtsüz ve ilave şekersiz doğal kurutulmuş, yoğun lezzetli ve lif zengini bahçe eriklerimiz.",
    tagline: "Katkısız • Kükürtsüz (SO2 İçermez) • Şeker İlavesiz",
    badge: "Geleneksel Güneşte Kurutma",
    image: "/images/kuru_erik_dogal.jpg",
    primaryCtaText: "Kuru Erik Detayları",
    primaryCtaLink: "/urunler#guneste-kurutulmus-erik"
  },
  {
    id: 4,
    title: "Yüksek Yaylalardan Saf Ham Petek & Süzme Bal",
    subtitle: "Doğal karakovan peteklerimiz ve kavanozlu saf ham balımız; arılarımızın yayla çiçekleri ve çam ormanlarından derlediği saf şifa.",
    tagline: "Doğal Petek Balı • Şeker Şurubu İçermez • Arılıktan Sofraya",
    badge: "Doğal Arılık & Karakovan Petek Balı",
    image: "/images/honeycomb_petek.jpg",
    primaryCtaText: "Doğal Balı Keşfet",
    primaryCtaLink: "/urunler#dogal-yayla-bali"
  }
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  return (
    <section style={{ position: "relative", minHeight: "85vh", display: "flex", alignItems: "center", backgroundColor: "var(--bg-dark)" }}>
      {/* Slides Background */}
      {HERO_SLIDES.map((slide, idx) => (
        <div
          key={slide.id}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: idx === currentSlide ? 1 : 0,
            transition: "opacity 1s ease-in-out",
            zIndex: 1
          }}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={idx === 0}
            style={{ objectFit: "cover" }}
            sizes="100vw"
          />
          {/* Gradient Overlays for readable text */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "linear-gradient(180deg, rgba(13,40,24,0.7) 0%, rgba(13,40,24,0.85) 60%, rgba(13,40,24,0.95) 100%)"
            }}
          />
        </div>
      ))}

      {/* Main Content Area */}
      <div className="container" style={{ position: "relative", zIndex: 2, padding: "80px 20px" }}>
        <div style={{ maxWidth: "800px" }}>
          {/* Badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "18px", flexWrap: "wrap" }}>
            <span
              style={{
                backgroundColor: "rgba(212, 163, 115, 0.25)",
                color: "#faedcd",
                border: "1px solid rgba(212, 163, 115, 0.5)",
                padding: "8px 18px",
                borderRadius: "30px",
                fontSize: "0.85rem",
                fontWeight: 700,
                letterSpacing: "0.05em",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px"
              }}
            >
              <Sparkles size={16} color="#d4a373" />
              {HERO_SLIDES[currentSlide].badge}
            </span>
            <span
              style={{
                color: "#a3b899",
                fontSize: "0.85rem",
                fontWeight: 600
              }}
              className="hide-mobile"
            >
              • {HERO_SLIDES[currentSlide].tagline}
            </span>
          </div>

          {/* Heading */}
          <h1
            style={{
              color: "#ffffff",
              fontSize: "clamp(2.3rem, 5vw, 3.8rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: "20px",
              textShadow: "0 2px 10px rgba(0,0,0,0.3)"
            }}
          >
            {HERO_SLIDES[currentSlide].title}
          </h1>

          {/* Subtitle */}
          <p
            style={{
              color: "#e2e8f0",
              fontSize: "clamp(1.05rem, 2vw, 1.25rem)",
              lineHeight: 1.7,
              marginBottom: "36px",
              maxWidth: "680px"
            }}
          >
            {HERO_SLIDES[currentSlide].subtitle}
          </p>

          {/* CTA Buttons */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap", marginBottom: "40px" }}>
            <a
              href="tel:05323739605"
              className="btn btn-gold"
              style={{ padding: "16px 32px", fontSize: "1.05rem", fontWeight: 700 }}
            >
              <Phone size={20} />
              <span>Hemen Ara & Sipariş Ver</span>
            </a>

            <a
              href="https://wa.me/905323739605?text=Merhaba,%20P%C4%B1narl%C4%B1k%20Do%C4%9Fal%20G%C4%B1da%20%C3%BCr%C3%BCnleriniz%20hakk%C4%B1nda%20fiyat%20ve%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ padding: "16px 28px", fontSize: "1rem" }}
            >
              <MessageCircle size={20} />
              <span>WhatsApp Bilgi</span>
            </a>

            <Link
              href={HERO_SLIDES[currentSlide].primaryCtaLink}
              className="btn btn-white"
              style={{ padding: "16px 26px", fontSize: "0.95rem" }}
            >
              <Sprout size={18} color="var(--primary-700)" />
              <span>{HERO_SLIDES[currentSlide].primaryCtaText}</span>
            </Link>
          </div>

          {/* Trust points */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
              flexWrap: "wrap",
              paddingTop: "20px",
              borderTop: "1px solid rgba(255,255,255,0.15)",
              color: "#cbd5e1",
              fontSize: "0.88rem"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <ShieldCheck size={18} color="#52b788" />
              <span>Doğrudan Bahçeden</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <ShieldCheck size={18} color="#52b788" />
              <span>Taze Kırım Kelebek İç</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <ShieldCheck size={18} color="#52b788" />
              <span>Kükürtsüz Güneşte Kurutma</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <ShieldCheck size={18} color="#52b788" />
              <span>Ham Petek & Yayla Balı</span>
            </div>
          </div>
        </div>
      </div>

      {/* Slider Controls */}
      <div
        style={{
          position: "absolute",
          bottom: "30px",
          right: "40px",
          zIndex: 3,
          display: "flex",
          alignItems: "center",
          gap: "12px"
        }}
        className="hide-mobile"
      >
        <button
          onClick={prevSlide}
          aria-label="Önceki Slayt"
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.15)",
            backdropFilter: "blur(8px)",
            color: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid rgba(255,255,255,0.25)"
          }}
        >
          <ChevronLeft size={22} />
        </button>

        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            aria-label={`Slayt ${i + 1}`}
            style={{
              width: i === currentSlide ? "28px" : "10px",
              height: "10px",
              borderRadius: "5px",
              backgroundColor: i === currentSlide ? "var(--accent-amber)" : "rgba(255,255,255,0.3)",
              transition: "all 0.3s ease"
            }}
          />
        ))}

        <button
          onClick={nextSlide}
          aria-label="Sonraki Slayt"
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.15)",
            backdropFilter: "blur(8px)",
            color: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid rgba(255,255,255,0.25)"
          }}
        >
          <ChevronRight size={22} />
        </button>
      </div>
    </section>
  );
}
