import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Heart, Sprout, ArrowUpRight, ShieldCheck, Truck, Sparkles } from "lucide-react";
import InstagramIcon from "@/components/InstagramIcon";
import { INSTAGRAM_PROFILE_URL } from "@/data/instagram";

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: "var(--bg-dark)",
      color: "#e2e8f0",
      borderTop: "3px solid var(--primary-700)",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Top Value Proposition Grid */}
      <div style={{
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        padding: "36px 0"
      }}>
        <div className="container" style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "24px"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              backgroundColor: "rgba(82, 183, 136, 0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#52b788"
            }}>
              <Sprout size={26} />
            </div>
            <div>
              <h4 style={{ color: "#ffffff", fontSize: "1rem", marginBottom: "4px" }}>%100 Doğal Üretim</h4>
              <p style={{ color: "#94a3b8", fontSize: "0.85rem" }}>Kimyasal ve koruyucusuz yerli üretim</p>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              backgroundColor: "rgba(201, 138, 44, 0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#d4a373"
            }}>
              <Sparkles size={26} />
            </div>
            <div>
              <h4 style={{ color: "#ffffff", fontSize: "1rem", marginBottom: "4px" }}>Yeni Sezon Hasat</h4>
              <p style={{ color: "#94a3b8", fontSize: "0.85rem" }}>Dalından doğrudan evinize taze kırım</p>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              backgroundColor: "rgba(82, 183, 136, 0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#52b788"
            }}>
              <Truck size={26} />
            </div>
            <div>
              <h4 style={{ color: "#ffffff", fontSize: "1rem", marginBottom: "4px" }}>Güvenli Kargo</h4>
              <p style={{ color: "#94a3b8", fontSize: "0.85rem" }}>Türkiye geneli özenli paketleme ve teslimat</p>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              backgroundColor: "rgba(201, 138, 44, 0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#d4a373"
            }}>
              <ShieldCheck size={26} />
            </div>
            <div>
              <h4 style={{ color: "#ffffff", fontSize: "1rem", marginBottom: "4px" }}>Doğrudan Üreticiden</h4>
              <p style={{ color: "#94a3b8", fontSize: "0.85rem" }}>Aracısız, en uygun toptan/perakende imkanı</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div style={{ padding: "65px 0 40px 0" }}>
        <div className="container" style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "40px"
        }}>
          {/* Col 1: Brand & Philosophy */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "18px" }}>
              <div style={{
                width: "42px",
                height: "42px",
                borderRadius: "12px",
                backgroundColor: "var(--primary-700)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff"
              }}>
                <Sprout size={24} color="#d8f3dc" />
              </div>
              <div>
                <span style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.45rem",
                  fontWeight: 700,
                  color: "#ffffff",
                  letterSpacing: "0.02em"
                }}>
                  PINARLIK
                </span>
                <div style={{ fontSize: "0.7rem", color: "#d4a373", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  Doğal Gıda Ürünleri
                </div>
              </div>
            </div>

            <p style={{ color: "#94a3b8", fontSize: "0.92rem", lineHeight: 1.7, marginBottom: "20px" }}>
              Denizli Pınarlık&apos;ın bereketli toprakları ve bol güneşinde yetişen ince kabuklu cevizlerimiz, yemeye hazır kelebek iç cevizlerimiz, güneşte kurutulmuş eriklerimiz ve doğal yayla balımızla sofralarınıza sağlık taşıyoruz.
            </p>

            <a
              href={INSTAGRAM_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 16px",
                borderRadius: "20px",
                backgroundColor: "rgba(255,255,255,0.08)",
                color: "#faedcd",
                fontSize: "0.85rem",
                border: "1px solid rgba(255,255,255,0.15)"
              }}
            >
              <InstagramIcon size={16} />
              <span>Instagram&apos;da Bizi Takip Edin</span>
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 style={{
              color: "#ffffff",
              fontSize: "1.1rem",
              marginBottom: "20px",
              fontFamily: "var(--font-sans)",
              fontWeight: 700
            }}>
              Hızlı Bağlantılar
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              <li>
                <Link href="/" style={{ color: "#94a3b8", fontSize: "0.92rem" }}>Ana Sayfa</Link>
              </li>
              <li>
                <Link href="/urunler" style={{ color: "#94a3b8", fontSize: "0.92rem" }}>Tüm Ürünlerimiz</Link>
              </li>
              <li>
                <Link href="/hakkimizda" style={{ color: "#94a3b8", fontSize: "0.92rem" }}>Hakkımızda & Bahçemiz</Link>
              </li>
              <li>
                <Link href="/zaman-cizelgesi" style={{ color: "#94a3b8", fontSize: "0.92rem" }}>Hasat Zaman Çizelgesi</Link>
              </li>
              <li>
                <Link href="/galeri" style={{ color: "#94a3b8", fontSize: "0.92rem" }}>Fotoğraf Galerisi & Instagram</Link>
              </li>
              <li>
                <Link href="/iletisim" style={{ color: "#94a3b8", fontSize: "0.92rem" }}>İletişim & Sipariş Talebi</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Öne Çıkan Mahsuller */}
          <div>
            <h4 style={{
              color: "#ffffff",
              fontSize: "1.1rem",
              marginBottom: "20px",
              fontFamily: "var(--font-sans)",
              fontWeight: 700
            }}>
              Öne Çıkan Mahsullerimiz
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              <li>
                <Link href="/urunler#kabuklu-ceviz" style={{ color: "#94a3b8", fontSize: "0.92rem" }}>
                  🌰 Doğal İnce Kabuklu Ceviz
                </Link>
              </li>
              <li>
                <Link href="/urunler#kelebek-ic-ceviz" style={{ color: "#94a3b8", fontSize: "0.92rem" }}>
                  🦋 Kelebek Ayıklanmış İç Ceviz
                </Link>
              </li>
              <li>
                <Link href="/urunler#guneste-kurutulmus-erik" style={{ color: "#94a3b8", fontSize: "0.92rem" }}>
                  ☀️ Güneşte Kurutulmuş Doğal Erik
                </Link>
              </li>
              <li>
                <Link href="/urunler#dogal-yayla-bali" style={{ color: "#94a3b8", fontSize: "0.92rem" }}>
                  🍯 Saf Yayla & Çam Balı
                </Link>
              </li>
              <li>
                <Link href="/urunler#mevsimlik-meyve-sebze" style={{ color: "#94a3b8", fontSize: "0.92rem" }}>
                  🍎 Dalından Taze Mevsim Meyveleri
                </Link>
              </li>
              <li>
                <Link href="/urunler#koy-tarhanasi-ve-pekmez" style={{ color: "#94a3b8", fontSize: "0.92rem" }}>
                  🥣 Köy Tarhanası & Doğal Pekmez
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: İletişim Bilgileri */}
          <div>
            <h4 style={{
              color: "#ffffff",
              fontSize: "1.1rem",
              marginBottom: "20px",
              fontFamily: "var(--font-sans)",
              fontWeight: 700
            }}>
              Sipariş & İletişim Hattı
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                <Phone size={18} color="#d4a373" style={{ marginTop: "3px", flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: "0.75rem", color: "#94a3b8", textTransform: "uppercase" }}>Tüm Bilgi & Sipariş İçin:</div>
                  <a href="tel:05323739605" style={{ color: "#ffffff", fontSize: "1.15rem", fontWeight: 700 }}>
                    0532 373 96 05
                  </a>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                <Mail size={18} color="#d4a373" style={{ marginTop: "3px", flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: "0.75rem", color: "#94a3b8", textTransform: "uppercase" }}>E-Posta:</div>
                  <a href="mailto:bilgi@pinarlik.com" style={{ color: "#ffffff", fontSize: "0.95rem" }}>
                    bilgi@pinarlik.com
                  </a>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                <MapPin size={18} color="#d4a373" style={{ marginTop: "3px", flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: "0.75rem", color: "#94a3b8", textTransform: "uppercase" }}>Üretim Yeri:</div>
                  <span style={{ color: "#94a3b8", fontSize: "0.9rem" }}>
                    Pınarlık, Tavas, Denizli, Türkiye
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright and Adsense reference */}
      <div style={{
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        padding: "22px 0",
        backgroundColor: "var(--bg-darker)",
        fontSize: "0.82rem",
        color: "#64748b"
      }}>
        <div className="container" style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "14px"
        }}>
          <div>
            © {new Date().getFullYear()} Pınarlık Doğal Gıda Ürünleri. Tüm hakları saklıdır.
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap" }}>
            <span>Denizli Pınarlık Köy Mahsulleri</span>
            <span>•</span>
            <span>Tel: 0532 373 96 05</span>
            <span>•</span>
            <span>
              Yazılım:{" "}
              <a
                href="https://cankalsoftware.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#d4a373",
                  textDecoration: "underline",
                  textUnderlineOffset: "3px",
                  fontWeight: 600
                }}
              >
                cankalsoftware.com
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
