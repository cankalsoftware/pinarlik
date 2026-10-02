import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, MessageCircle, Sprout, ShieldCheck, Sparkles, Truck, Award, ArrowRight, CheckCircle2, HeartHandshake, SunMedium } from "lucide-react";
import HeroCarousel from "@/components/HeroCarousel";
import ProductCard from "@/components/ProductCard";
import InstagramFeed from "@/components/InstagramFeed";
import GrowthTimeline from "@/components/GrowthTimeline";
import FAQSection from "@/components/FAQSection";
import AdSenseBanner from "@/components/AdSenseBanner";
import { PRODUCTS } from "@/data/products";

export default function HomePage() {
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <>
      {/* 1. Hero Section with dynamic slides */}
      <HeroCarousel />

      {/* 2. Top 2 Main Products Flagship Feature Banner */}
      <section className="section-padding" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div className="section-header">
            <div className="badge badge-gold">
              <Sparkles size={14} />
              <span>Ana Mahsullerimiz</span>
            </div>
            <h2 className="section-title">En Çok Tercih Edilen 2 Temel Ürünümüz</h2>
            <p className="section-subtitle">
              Pınarlık bahçemizin en meşhur mahsulleri: İnce kabuklu doğal cevizlerimiz (kabuklu veya ayıklanmış yemeye hazır kelebek iç) ve Ege güneşinde ağır ağır kurutulmuş kükürtsüz eriklerimiz.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "30px",
            marginBottom: "20px"
          }}>
            {/* Top Product 1: Ceviz (Kabuklu & Kelebek İç) */}
            <div
              className="card-organic"
              style={{
                display: "flex",
                flexDirection: "column",
                border: "2px solid rgba(45, 106, 79, 0.3)",
                background: "linear-gradient(180deg, #ffffff 0%, #f7fbf8 100%)",
                position: "relative"
              }}
            >
              <div style={{ position: "absolute", top: "18px", left: "18px", zIndex: 2 }}>
                <span className="badge badge-primary">
                  🌰 1 Numaralı Ürünümüz
                </span>
              </div>

              <div style={{ position: "relative", height: "280px", width: "100%" }}>
                <Image
                  src="/images/ic_ceviz_kelebek.jpg"
                  alt="Pınarlık Doğal Ayıklanmış Kelebek İç Ceviz ve Kabuklu Ceviz"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div style={{ padding: "30px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                <div style={{ fontSize: "0.85rem", color: "var(--primary-700)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  Denizli Pınarlık Bahçelerinden
                </div>
                <h3 style={{ fontSize: "1.6rem", color: "var(--primary-900)", margin: "6px 0 12px 0" }}>
                  Doğal Ceviz (Kabuklu & Yemeye Hazır Kelebek İç)
                </h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "18px" }}>
                  Ağaçlarımızdan yeni hasat edilmiş, ince kabuklu, kolay kırılan kabuklu cevizlerimiz ile el emeğiyle kabuğundan ayıklanmış, bembeyaz <strong>kelebek bütün iç cevizlerimiz</strong>.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "22px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.9rem" }}>
                    <CheckCircle2 size={16} color="var(--primary-600)" />
                    <span><strong>Kelebek İç Seçenek:</strong> Kabuğundan ayıklanmış, tüketime hazır bütün iç</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.9rem" }}>
                    <CheckCircle2 size={16} color="var(--primary-600)" />
                    <span><strong>Kabuklu Seçenek:</strong> İnce kabuklu, elle dahi kırılır, dolgun randıman</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.9rem" }}>
                    <CheckCircle2 size={16} color="var(--primary-600)" />
                    <span>Kimyasal ağartıcı veya klor kesinlikle kullanılmaz</span>
                  </div>
                </div>

                <div style={{
                  backgroundColor: "var(--primary-50)",
                  padding: "14px",
                  borderRadius: "12px",
                  textAlign: "center",
                  border: "1px dashed var(--primary-600)",
                  marginBottom: "18px"
                }}>
                  <div style={{ fontSize: "0.8rem", color: "var(--primary-700)", fontWeight: 700 }}>TOPTAN & PERAKENDE</div>
                  <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--primary-900)" }}>Fiyat ve Sipariş İçin Arayınız</div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginTop: "auto" }}>
                  <a href="tel:05323739605" className="btn btn-primary">
                    <Phone size={16} />
                    <span>0532 373 96 05</span>
                  </a>
                  <a
                    href="https://wa.me/905323739605?text=Merhaba,%20Do%C4%9Fal%20Ceviz%20(Kabuklu%20veya%20%C4%B0%C3%A7)%20sipari%C5%9Fi%20hakk%C4%B1nda%20fiyat%20bilgisi%20almak%20istiyorum."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp"
                  >
                    <MessageCircle size={16} />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Top Product 2: Güneşte Kurutulmuş Erik */}
            <div
              className="card-organic"
              style={{
                display: "flex",
                flexDirection: "column",
                border: "2px solid rgba(201, 138, 44, 0.3)",
                background: "linear-gradient(180deg, #ffffff 0%, #fffbf5 100%)",
                position: "relative"
              }}
            >
              <div style={{ position: "absolute", top: "18px", left: "18px", zIndex: 2 }}>
                <span className="badge badge-gold">
                  ☀️ Güneşte Doğal Kurutma
                </span>
              </div>

              <div style={{ position: "relative", height: "280px", width: "100%" }}>
                <Image
                  src="/images/kuru_erik_dogal.jpg"
                  alt="Pınarlık Güneşte Kurutulmuş Doğal Erik"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div style={{ padding: "30px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                <div style={{ fontSize: "0.85rem", color: "var(--accent-terracotta)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  Geleneksel Kış Hazırlığı
                </div>
                <h3 style={{ fontSize: "1.6rem", color: "var(--primary-900)", margin: "6px 0 12px 0" }}>
                  Güneşte Kurutulmuş Doğal Erik
                </h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "18px" }}>
                  Tam mevsiminde dalından toplanan eriklerimiz, hiçbir kimyasal kükürtleme işlemine tabi tutulmadan yalnızca temiz yayla havası ve güneşte kurutulur.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "22px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.9rem" }}>
                    <CheckCircle2 size={16} color="var(--primary-600)" />
                    <span><strong>Kükürtsüz (SO2 içermez):</strong> Doğal koyu renk ve saf lezzet</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.9rem" }}>
                    <CheckCircle2 size={16} color="var(--primary-600)" />
                    <span><strong>İlave Şekersiz:</strong> Yalnızca meyvenin kendi doğal şekeri</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.9rem" }}>
                    <CheckCircle2 size={16} color="var(--primary-600)" />
                    <span>Sindirim dostu, yüksek lif, potasyum ve antioksidan deposu</span>
                  </div>
                </div>

                <div style={{
                  backgroundColor: "#fef8ee",
                  padding: "14px",
                  borderRadius: "12px",
                  textAlign: "center",
                  border: "1px dashed var(--accent-amber)",
                  marginBottom: "18px"
                }}>
                  <div style={{ fontSize: "0.8rem", color: "var(--accent-terracotta)", fontWeight: 700 }}>DOĞAL MAHSUL</div>
                  <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--primary-900)" }}>Fiyat ve Sipariş İçin Arayınız</div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginTop: "auto" }}>
                  <a href="tel:05323739605" className="btn btn-gold">
                    <Phone size={16} />
                    <span>0532 373 96 05</span>
                  </a>
                  <a
                    href="https://wa.me/905323739605?text=Merhaba,%20G%C3%BCne%C5%9Fte%20Kurutulmu%C5%9F%20Do%C4%9Fal%20Erik%20hakk%C4%B1nda%20fiyat%20ve%20sipari%C5%9F%20bilgisi%20almak%20istiyorum."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp"
                  >
                    <MessageCircle size={16} />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Öne Çıkan Tüm Ürünlerimiz Grid */}
      <section className="section-padding" style={{ backgroundColor: "var(--bg-main)" }}>
        <div className="container">
          <div className="section-header">
            <div className="badge badge-primary">
              <Sprout size={14} />
              <span>Ürün Yelpazemiz</span>
            </div>
            <h2 className="section-title">Bahçemizden ve Köyümüzden Doğal Ürünler</h2>
            <p className="section-subtitle">
              Ceviz ve kuru eriğin yanı sıra saf yayla balı, mevsimlik dalından meyveler ve geleneksel köy kiler ürünlerimiz sofralarınızda.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
            marginBottom: "40px"
          }}>
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div style={{ textAlign: "center" }}>
            <Link href="/urunler" className="btn btn-primary" style={{ padding: "14px 32px", fontSize: "1rem" }}>
              <span>Tüm Ürünleri ve Detayları Gör</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Why Pınarlık? (Neden Pınarlık?) */}
      <section className="section-padding" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div className="section-header">
            <div className="badge badge-gold">
              <Award size={14} />
              <span>Neden Pınarlık?</span>
            </div>
            <h2 className="section-title">Doğallığın ve Emeğin Güvencesi</h2>
            <p className="section-subtitle">
              Pınarlık&apos;ta geleneksel tarımı koruyor, toprağımıza ve tüketicimize saygıyla en kaliteli mahsulü üretiyoruz.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "24px"
          }}>
            <div className="card-organic" style={{ padding: "30px", textAlign: "center" }}>
              <div style={{
                width: "60px",
                height: "60px",
                borderRadius: "18px",
                backgroundColor: "var(--primary-100)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--primary-800)",
                marginBottom: "20px"
              }}>
                <Sprout size={32} />
              </div>
              <h3 style={{ fontSize: "1.25rem", color: "var(--primary-900)", marginBottom: "10px" }}>
                100% Yerli & İlaçsız
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: 1.6 }}>
                İthal veya depolarda beklemiş ürünler değil, Denizli Pınarlık&apos;ta kendi bahçelerimizde sevgiyle yetiştirilmiş yeni mahsullerdir.
              </p>
            </div>

            <div className="card-organic" style={{ padding: "30px", textAlign: "center" }}>
              <div style={{
                width: "60px",
                height: "60px",
                borderRadius: "18px",
                backgroundColor: "#fef5e7",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#c98a2c",
                marginBottom: "20px"
              }}>
                <SunMedium size={32} />
              </div>
              <h3 style={{ fontSize: "1.25rem", color: "var(--primary-900)", marginBottom: "10px" }}>
                Güneşte Doğal Kurutma
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: 1.6 }}>
                Kimyasal kükürt fırınları veya yapay gazlar yerine Ege&apos;nin tertemiz güneşi ve yayla rüzgarında kurutulan saf lezzetler.
              </p>
            </div>

            <div className="card-organic" style={{ padding: "30px", textAlign: "center" }}>
              <div style={{
                width: "60px",
                height: "60px",
                borderRadius: "18px",
                backgroundColor: "var(--primary-100)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--primary-800)",
                marginBottom: "20px"
              }}>
                <Truck size={32} />
              </div>
              <h3 style={{ fontSize: "1.25rem", color: "var(--primary-900)", marginBottom: "10px" }}>
                Doğrudan Üreticiden Kargo
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: 1.6 }}>
                Aracısız, doğrudan bahçeden kapınıza. Kırılma ve hava almayı önleyen özenli ambalajlarda 81 ile güvenli gönderim.
              </p>
            </div>

            <div className="card-organic" style={{ padding: "30px", textAlign: "center" }}>
              <div style={{
                width: "60px",
                height: "60px",
                borderRadius: "18px",
                backgroundColor: "#fef5e7",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#c98a2c",
                marginBottom: "20px"
              }}>
                <HeartHandshake size={32} />
              </div>
              <h3 style={{ fontSize: "1.25rem", color: "var(--primary-900)", marginBottom: "10px" }}>
                Güven & Memnuniyet
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: 1.6 }}>
                Toptan veya perakende tüm siparişlerinizde telefonun diğer ucunda doğrudan üreticiyle muhatap olursunuz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Production & Growth Timeline */}
      <GrowthTimeline />

      {/* 6. Live Instagram Feed Section */}
      <InstagramFeed />

      {/* 7. Sıkça Sorulan Sorular (FAQ - SEO & AEO) */}
      <FAQSection />

      {/* 8. Call to Action Banner */}
      <section style={{
        backgroundColor: "var(--primary-900)",
        color: "#ffffff",
        padding: "70px 0",
        position: "relative",
        overflow: "hidden"
      }}>
        <div className="container" style={{ position: "relative", zIndex: 2, textAlign: "center", maxWidth: "800px" }}>
          <div className="badge badge-gold" style={{ marginBottom: "16px" }}>
            <Phone size={14} />
            <span>Hızlı Sipariş & Bilgi</span>
          </div>

          <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", color: "#ffffff", marginBottom: "16px" }}>
            Doğal ve Taze Köy Mahsulleri İçin Hemen Bizi Arayın
          </h2>

          <p style={{ color: "#cbd5e1", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: "32px" }}>
            Yeni sezon ceviz, kelebek iç ceviz, kurutulmuş erik ve doğal bal siparişleriniz için güncel fiyat bilgisi almak üzere telefon numaramızdan bize 7 gün ulaşabilirsiniz.
          </p>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
            <a
              href="tel:05323739605"
              className="btn btn-gold"
              style={{ padding: "16px 36px", fontSize: "1.15rem", fontWeight: 800 }}
            >
              <Phone size={22} />
              <span>0532 373 96 05</span>
            </a>

            <a
              href="https://wa.me/905323739605?text=Merhaba,%20P%C4%B1narl%C4%B1k%20Do%C4%9Fal%20G%C4%B1da%20%C3%BCr%C3%BCnleriniz%20hakk%C4%B1nda%20bilgi%20ve%20fiyat%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ padding: "16px 32px", fontSize: "1.05rem" }}
            >
              <MessageCircle size={22} />
              <span>WhatsApp ile Sipariş Ver</span>
            </a>
          </div>

          <div style={{ marginTop: "24px", color: "#94a3b8", fontSize: "0.88rem" }}>
            📍 Denizli / Tavas / Pınarlık • ✉️ bilgi@pinarlik.com
          </div>
        </div>
      </section>

      {/* AdSense Unit placement */}
      <div className="container">
        <AdSenseBanner />
      </div>
    </>
  );
}
