"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, MessageCircle, Menu, X, Sprout, ChevronRight } from "lucide-react";
import InstagramIcon from "@/components/InstagramIcon";
import { INSTAGRAM_PROFILE_URL } from "@/data/instagram";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/", label: "Ana Sayfa" },
    { href: "/urunler", label: "Ürünlerimiz" },
    { href: "/hakkimizda", label: "Hakkımızda" },
    { href: "/zaman-cizelgesi", label: "Zaman Çizelgesi" },
    { href: "/galeri", label: "Galeri & Instagram" },
    { href: "/iletisim", label: "İletişim" },
  ];

  return (
    <>
      {/* Top Notification / Quick Contact Bar */}
      <div style={{
        backgroundColor: "var(--primary-900)",
        color: "#e2e8f0",
        fontSize: "0.82rem",
        padding: "7px 0",
        borderBottom: "1px solid rgba(255,255,255,0.08)"
      }}>
        <div className="container" style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "10px"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{
              display: "inline-block",
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "#52b788"
            }} />
            <span>🌰 <strong>2026 Yeni Sezon:</strong> Doğal Kabuklu Ceviz & Kelebek İç Ceviz Hasadımız Başladı!</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
            <a
              href="tel:05323739605"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                color: "#faedcd",
                fontWeight: 600
              }}
            >
              <Phone size={13} />
              <span>0532 373 96 05</span>
            </a>
            <a
              href={INSTAGRAM_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                color: "#e2e8f0",
                opacity: 0.9
              }}
            >
              <InstagramIcon size={13} />
              <span>@pinarlik_dogal_gida_urunleri</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          backgroundColor: isScrolled ? "rgba(251, 249, 245, 0.96)" : "#fbf9f5",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          boxShadow: isScrolled ? "0 4px 20px rgba(15, 36, 23, 0.08)" : "none",
          borderBottom: "1px solid var(--border-light)",
          transition: "all 0.3s ease"
        }}
      >
        <div className="container" style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "var(--header-height)"
        }}>
          {/* Brand Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{
              width: "46px",
              height: "46px",
              borderRadius: "14px",
              background: "linear-gradient(135deg, var(--primary-800) 0%, var(--primary-600) 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              boxShadow: "0 4px 12px rgba(27, 67, 50, 0.25)"
            }}>
              <Sprout size={26} color="#d8f3dc" />
            </div>
            <div>
              <div style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.55rem",
                fontWeight: 700,
                color: "var(--primary-900)",
                lineHeight: 1.1
              }}>
                PINARLIK
              </div>
              <div style={{
                fontSize: "0.72rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--accent-terracotta)",
                fontWeight: 700
              }}>
                Doğal Gıda Ürünleri
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav style={{
            display: "none",
            alignItems: "center",
            gap: "28px"
          }}
            className="desktop-nav"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? "var(--primary-800)" : "var(--text-main)",
                    position: "relative",
                    padding: "8px 0"
                  }}
                >
                  {link.label}
                  {isActive && (
                    <span style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "100%",
                      height: "2.5px",
                      backgroundColor: "var(--primary-700)",
                      borderRadius: "2px"
                    }} />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <a
              href="https://wa.me/905323739605?text=Merhaba,%20P%C4%B1narl%C4%B1k%20Do%C4%9Fal%20G%C4%B1da%20%C3%BCr%C3%BCnleriniz%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp hide-mobile"
              style={{ padding: "10px 18px", fontSize: "0.88rem" }}
            >
              <MessageCircle size={17} />
              <span>WhatsApp</span>
            </a>

            <a
              href="tel:05323739605"
              className="btn btn-primary hide-mobile"
              style={{ padding: "10px 20px", fontSize: "0.88rem" }}
            >
              <Phone size={16} />
              <span>0532 373 96 05</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-menu-btn"
              aria-label="Menüyü Aç"
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "10px",
                border: "1px solid var(--border-light)",
                backgroundColor: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--primary-900)"
              }}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Slideout Drawer */}
        {mobileMenuOpen && (
          <div style={{
            backgroundColor: "#ffffff",
            borderBottom: "2px solid var(--border-light)",
            boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            padding: "20px"
          }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "12px 14px",
                      borderRadius: "10px",
                      backgroundColor: isActive ? "var(--primary-50)" : "transparent",
                      color: isActive ? "var(--primary-800)" : "var(--text-main)",
                      fontWeight: isActive ? 700 : 500,
                      fontSize: "1rem"
                    }}
                  >
                    <span>{link.label}</span>
                    <ChevronRight size={18} color="var(--primary-600)" />
                  </Link>
                );
              })}

              <div style={{
                marginTop: "15px",
                paddingTop: "15px",
                borderTop: "1px solid var(--border-subtle)",
                display: "flex",
                flexDirection: "column",
                gap: "10px"
              }}>
                <a
                  href="tel:05323739605"
                  className="btn btn-primary"
                  style={{ width: "100%" }}
                >
                  <Phone size={18} />
                  <span>Hemen Ara: 0532 373 96 05</span>
                </a>
                <a
                  href="https://wa.me/905323739605?text=Merhaba,%20P%C4%B1narl%C4%B1k%20Do%C4%9Fal%20G%C4%B1da%20%C3%BCr%C3%BCnleriniz%20hakk%C4%B1nda%20bilgi%20ve%20fiyat%20almak%20istiyorum."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  style={{ width: "100%" }}
                >
                  <MessageCircle size={18} />
                  <span>WhatsApp ile Sipariş Sor</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Media query helper styles */}
      <style jsx global>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
        @media (max-width: 600px) {
          .hide-mobile {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
