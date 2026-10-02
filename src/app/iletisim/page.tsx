import { Phone, Mail, MapPin, Clock, MessageCircle, ShieldCheck } from "lucide-react";
import InstagramIcon from "@/components/InstagramIcon";
import ContactForm from "@/components/ContactForm";
import AdSenseBanner from "@/components/AdSenseBanner";
import { INSTAGRAM_PROFILE_URL, INSTAGRAM_HANDLE } from "@/data/instagram";

export const metadata = {
  title: "İletişim & Sipariş Hattı",
  description: "Pınarlık Doğal Gıda ürünleri bilgi ve sipariş hattı. Telefon: 0532 373 96 05, E-posta: bilgi@pinarlik.com, Denizli Pınarlık."
};

export default function ContactPage() {
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
            <Phone size={14} />
            <span>Doğrudan Üretici İletişim Hattı</span>
          </div>
          <h1 style={{ fontSize: "clamp(2.2rem, 4vw, 3rem)", color: "#ffffff", marginBottom: "14px" }}>
            Bizimle İletişime Geçin
          </h1>
          <p style={{ color: "#cbd5e1", fontSize: "1.05rem", lineHeight: 1.7 }}>
            Toptan ve perakende ceviz, kelebek iç ceviz, kurutulmuş erik, doğal bal ve mevsimlik ürünlerimiz için güncel fiyat bilgisi almak veya sipariş oluşturmak üzere bize dilediğiniz zaman ulaşabilirsiniz.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="section-padding">
        <div className="container">
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "40px",
            marginBottom: "60px"
          }}>
            {/* Left: Contact Info Cards */}
            <div>
              <h2 style={{ fontSize: "1.8rem", color: "var(--primary-900)", marginBottom: "20px" }}>
                İletişim Bilgilerimiz
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "28px" }}>
                Sorularınız, toptan çuval/koli talepleriniz veya perakende siparişleriniz için telefonla doğrudan üreticiye bağlanabilir ya da form aracılığıyla mesaj bırakabilirsiniz.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "18px", marginBottom: "32px" }}>
                {/* Phone Card */}
                <div style={{
                  backgroundColor: "#ffffff",
                  padding: "20px",
                  borderRadius: "16px",
                  border: "1px solid var(--border-light)",
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  boxShadow: "var(--shadow-sm)"
                }}>
                  <div style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "14px",
                    backgroundColor: "var(--primary-100)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--primary-800)",
                    flexShrink: 0
                  }}>
                    <Phone size={24} />
                  </div>
                  <div style={{ flexGrow: 1 }}>
                    <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: 700 }}>
                      Sipariş & Bilgi Hattı
                    </div>
                    <a href="tel:05323739605" style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--primary-900)" }}>
                      0532 373 96 05
                    </a>
                  </div>
                  <a href="tel:05323739605" className="btn btn-primary" style={{ padding: "8px 14px", fontSize: "0.82rem" }}>
                    Ara
                  </a>
                </div>

                {/* WhatsApp Card */}
                <div style={{
                  backgroundColor: "#ffffff",
                  padding: "20px",
                  borderRadius: "16px",
                  border: "1px solid var(--border-light)",
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  boxShadow: "var(--shadow-sm)"
                }}>
                  <div style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "14px",
                    backgroundColor: "#e7f9ee",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#25D366",
                    flexShrink: 0
                  }}>
                    <MessageCircle size={24} />
                  </div>
                  <div style={{ flexGrow: 1 }}>
                    <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: 700 }}>
                      WhatsApp Hızlı Sipariş
                    </div>
                    <div style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--primary-900)" }}>
                      0532 373 96 05
                    </div>
                  </div>
                  <a
                    href="https://wa.me/905323739605?text=Merhaba,%20P%C4%B1narl%C4%B1k%20Do%C4%9Fal%20G%C4%B1da%20%C3%BCr%C3%BCnleriniz%20ve%20fiyatlar%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp"
                    style={{ padding: "8px 14px", fontSize: "0.82rem" }}
                  >
                    Yazın
                  </a>
                </div>

                {/* Email Card */}
                <div style={{
                  backgroundColor: "#ffffff",
                  padding: "20px",
                  borderRadius: "16px",
                  border: "1px solid var(--border-light)",
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  boxShadow: "var(--shadow-sm)"
                }}>
                  <div style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "14px",
                    backgroundColor: "#fef5e7",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#c98a2c",
                    flexShrink: 0
                  }}>
                    <Mail size={24} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: 700 }}>
                      E-Posta Adresimiz
                    </div>
                    <a href="mailto:bilgi@pinarlik.com" style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--primary-900)" }}>
                      bilgi@pinarlik.com
                    </a>
                  </div>
                </div>

                {/* Address Card */}
                <div style={{
                  backgroundColor: "#ffffff",
                  padding: "20px",
                  borderRadius: "16px",
                  border: "1px solid var(--border-light)",
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  boxShadow: "var(--shadow-sm)"
                }}>
                  <div style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "14px",
                    backgroundColor: "var(--primary-100)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--primary-800)",
                    flexShrink: 0
                  }}>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: 700 }}>
                      Üretim & Bahçe Adresi
                    </div>
                    <div style={{ fontSize: "1rem", fontWeight: 600, color: "var(--primary-900)" }}>
                      Pınarlık Mahallesi, Tavas / Denizli, Türkiye
                    </div>
                  </div>
                </div>

                {/* Instagram Profile Link */}
                <div style={{
                  backgroundColor: "#ffffff",
                  padding: "20px",
                  borderRadius: "16px",
                  border: "1px solid var(--border-light)",
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  boxShadow: "var(--shadow-sm)"
                }}>
                  <div style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "14px",
                    backgroundColor: "#fdf2f8",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#db2777",
                    flexShrink: 0
                  }}>
                    <InstagramIcon size={24} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: 700 }}>
                      Instagram Güncel Paylaşımlar
                    </div>
                    <a
                      href={INSTAGRAM_PROFILE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: "1rem", fontWeight: 700, color: "var(--primary-900)" }}
                    >
                      @{INSTAGRAM_HANDLE}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>

          {/* Google Maps / Location Visual */}
          <div style={{
            backgroundColor: "#ffffff",
            borderRadius: "24px",
            overflow: "hidden",
            border: "1px solid var(--border-light)",
            boxShadow: "var(--shadow-sm)",
            marginBottom: "40px"
          }}>
            <div style={{ padding: "24px 30px", borderBottom: "1px solid var(--border-subtle)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "10px" }}>
              <div>
                <h3 style={{ fontSize: "1.25rem", color: "var(--primary-900)" }}>Üretim Coğrafyamız: Pınarlık / Denizli</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.88rem" }}>Denizli ili Tavas ilçesi Pınarlık mevkii</p>
              </div>
              <a
                href="https://maps.google.com/?q=Pinarlik,Tavas,Denizli"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ padding: "8px 18px", fontSize: "0.85rem" }}
              >
                Google Haritalar&apos;da Aç
              </a>
            </div>

            <div style={{ position: "relative", height: "350px", width: "100%" }}>
              <iframe
                title="Pınarlık Denizli Konumu"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50893.58572186714!2d29.02003882772591!3d37.57561879058778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c7161b953d5085%3A0x6e9f1969e6bbaea3!2zUMSxbmFybMSxaywgVGF2YXMvRGVuaXpsaQ!5e0!3m2!1str!2str!4v1711900000000!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <AdSenseBanner />
        </div>
      </section>
    </div>
  );
}
