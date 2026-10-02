import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sprout, Phone, MessageCircle, ShieldCheck, Sun, Mountain, Award, Heart, CheckCircle2 } from "lucide-react";
import AdSenseBanner from "@/components/AdSenseBanner";

export const metadata = {
  title: "Hakkımızda & Bahçemiz",
  description: "Denizli Pınarlık'ta geleneksel tarım yöntemleriyle doğal ceviz, kuru erik ve köy mahsulleri yetiştiren aile işletmemizin hikayesi."
};

export default function AboutPage() {
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
            <Mountain size={14} />
            <span>Denizli Pınarlık Yaylası</span>
          </div>
          <h1 style={{ fontSize: "clamp(2.2rem, 4vw, 3rem)", color: "#ffffff", marginBottom: "14px" }}>
            Toprağa Saygı, Sofralara Doğallık
          </h1>
          <p style={{ color: "#cbd5e1", fontSize: "1.05rem", lineHeight: 1.7 }}>
            Pınarlık Doğal Gıda Ürünleri olarak, Denizli&apos;nin eşsiz coğrafyasında kimyasal katkılardan uzak, geleneksel yöntemlerle en saf mahsulleri üretiyoruz.
          </p>
        </div>
      </section>

      {/* Main Story Content */}
      <section className="section-padding">
        <div className="container">
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "50px",
            alignItems: "center",
            marginBottom: "60px"
          }}>
            {/* Story Text */}
            <div>
              <div className="badge badge-primary" style={{ marginBottom: "14px" }}>
                <Sprout size={14} />
                <span>Hikayemiz</span>
              </div>
              <h2 style={{ fontSize: "2.2rem", color: "var(--primary-900)", marginBottom: "20px" }}>
                Pınarlık&apos;ın Bereketli Topraklarında Yeşeren Emek
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "16px" }}>
                Denizli&apos;nin Tavas ilçesine bağlı Pınarlık beldesi; yüksek rakımı, temiz dağ havası, kireçli ve verimli toprak yapısıyla ceviz ve meyve yetiştiriciliği için Türkiye&apos;nin en elverişli mikroklimalarından birine sahiptir.
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "24px" }}>
                Yıllardır ailemizin gözü gibi baktığı ceviz bahçelerimizde ve meyve bağlarımızda endüstriyel tarım kimyasallarına, sentetik koruyuculara ve yapay renklendiricilere yer vermiyoruz. Ağacın ihtiyacı olan suyu dağ kaynaklarımızdan damla sulamayla karşılıyor, toprağımızı doğal hayvan gübresi ve organik kompostla besliyoruz.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "28px" }}>
                <div style={{ padding: "16px", backgroundColor: "#ffffff", borderRadius: "14px", border: "1px solid var(--border-light)" }}>
                  <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--primary-700)" }}>%100</div>
                  <div style={{ fontSize: "0.88rem", color: "var(--text-muted)", marginTop: "4px" }}>Doğal Köy Mahsulü</div>
                </div>
                <div style={{ padding: "16px", backgroundColor: "#ffffff", borderRadius: "14px", border: "1px solid var(--border-light)" }}>
                  <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--accent-amber)" }}>0%</div>
                  <div style={{ fontSize: "0.88rem", color: "var(--text-muted)", marginTop: "4px" }}>Katkı & Koruyucu</div>
                </div>
              </div>

              <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
                <a href="tel:05323739605" className="btn btn-primary">
                  <Phone size={18} />
                  <span>0532 373 96 05</span>
                </a>
                <Link href="/galeri" className="btn btn-outline">
                  <span>Bahçe Fotoğraflarımızı Gör</span>
                </Link>
              </div>
            </div>

            {/* Visual Mosaic */}
            <div style={{ position: "relative" }}>
              <div style={{
                position: "relative",
                height: "420px",
                width: "100%",
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "var(--shadow-lg)"
              }}>
                <Image
                  src="/images/sera_l.jpg"
                  alt="Pınarlık Bahçemiz ve Tarım Alanı"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div style={{
                position: "absolute",
                bottom: "-25px",
                left: "-20px",
                backgroundColor: "#ffffff",
                padding: "20px 24px",
                borderRadius: "18px",
                boxShadow: "var(--shadow-md)",
                border: "1px solid var(--border-light)",
                maxWidth: "260px"
              }}
              className="hide-mobile"
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: 700, color: "var(--primary-800)" }}>
                  <Award size={20} color="var(--accent-gold)" />
                  <span>Doğal Lezzet Ödülü</span>
                </div>
                <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "4px" }}>
                  Müşterilerimizin güveni ve memnuniyeti en büyük referansımızdır.
                </p>
              </div>
            </div>
          </div>

          {/* Pillars of Production */}
          <div style={{
            backgroundColor: "#ffffff",
            borderRadius: "24px",
            padding: "45px 35px",
            border: "1px solid var(--border-light)",
            boxShadow: "var(--shadow-sm)",
            marginBottom: "40px"
          }}>
            <div className="section-header" style={{ marginBottom: "35px" }}>
              <h3 style={{ fontSize: "1.8rem", color: "var(--primary-900)" }}>Üretim İlkelerimiz</h3>
              <p className="section-subtitle">Tarladan sofraya her aşamada taviz vermediğimiz değerlerimiz</p>
            </div>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "24px"
            }}>
              <div style={{ display: "flex", gap: "14px" }}>
                <div style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  backgroundColor: "var(--primary-100)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--primary-800)",
                  flexShrink: 0
                }}>
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: "1.1rem", color: "var(--primary-900)", marginBottom: "6px" }}>İlaçsız & Katkısız</h4>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.6 }}>
                    Ağaçlarımıza ve mahsullerimize sentetik hormon veya yapay kimyasal katkılar temas ettirmiyoruz.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "14px" }}>
                <div style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  backgroundColor: "#fef5e7",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#c98a2c",
                  flexShrink: 0
                }}>
                  <Sun size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: "1.1rem", color: "var(--primary-900)", marginBottom: "6px" }}>Güneşte Doğal Kurutma</h4>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.6 }}>
                    Eriklerimizi ve cevizlerimizi endüstriyel fırınlarda değil, doğal güneş sergilerinde kurutuyoruz.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "14px" }}>
                <div style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  backgroundColor: "var(--primary-100)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--primary-800)",
                  flexShrink: 0
                }}>
                  <Heart size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: "1.1rem", color: "var(--primary-900)", marginBottom: "6px" }}>El Emeği ile Ayıklama</h4>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.6 }}>
                    Kelebek iç cevizlerimizi makinelerle parçalamadan, el emeğiyle tek tek ayıklayarak bütünlüğünü koruyoruz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
