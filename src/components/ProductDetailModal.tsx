"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Phone, MessageCircle, Check, Calendar, Package, Sparkles, ShieldCheck } from "lucide-react";
import { Product } from "@/types";

interface ProductDetailModalProps {
  product: Product;
  onClose: () => void;
}

export default function ProductDetailModal({ product, onClose }: ProductDetailModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const whatsappMessage = encodeURIComponent(
    `Merhaba, Pınarlık Doğal Gıda web sitenizden "${product.name}" hakkında detaylı bilgi ve güncel fiyat öğrenmek istiyorum.`
  );

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(13, 40, 24, 0.75)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        zIndex: 2000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px"
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "24px",
          maxWidth: "840px",
          width: "100%",
          maxHeight: "90vh",
          overflowY: "auto",
          position: "relative",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.35)",
          border: "1px solid var(--border-light)"
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Kapat"
          style={{
            position: "absolute",
            top: "18px",
            right: "18px",
            zIndex: 10,
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            border: "1px solid var(--border-light)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--primary-900)",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
          }}
        >
          <X size={20} />
        </button>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "0px"
        }}>
          {/* Images Gallery */}
          <div style={{ padding: "28px", backgroundColor: "var(--bg-muted)", borderRight: "1px solid var(--border-subtle)" }}>
            <div style={{ position: "relative", height: "300px", width: "100%", borderRadius: "16px", overflow: "hidden", marginBottom: "14px", backgroundColor: "#e2e8f0" }}>
              <Image
                src={product.images[activeImageIndex] || product.images[0]}
                alt={product.name}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>

            {/* Thumbnail selector */}
            {product.images.length > 1 && (
              <div style={{ display: "flex", gap: "10px" }}>
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    style={{
                      position: "relative",
                      width: "60px",
                      height: "60px",
                      borderRadius: "10px",
                      overflow: "hidden",
                      border: idx === activeImageIndex ? "2.5px solid var(--primary-700)" : "1.5px solid var(--border-light)",
                      opacity: idx === activeImageIndex ? 1 : 0.7
                    }}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} thumbnail ${idx}`}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="60px"
                    />
                  </button>
                ))}
              </div>
            )}

            <div style={{
              marginTop: "20px",
              padding: "14px",
              borderRadius: "12px",
              backgroundColor: "rgba(255,255,255,0.7)",
              border: "1px solid var(--border-light)",
              fontSize: "0.85rem",
              color: "var(--text-muted)"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", fontWeight: 700, color: "var(--primary-800)", marginBottom: "4px" }}>
                <ShieldCheck size={16} color="var(--primary-600)" />
                <span>Pınarlık Doğal Ürün Güvencesi</span>
              </div>
              <p>Kimyasal koruyucu, yapay renklendirici veya beyazlatıcı kullanılmamıştır. Katkısız köy üretimidir.</p>
            </div>
          </div>

          {/* Details Content */}
          <div style={{ padding: "32px", display: "flex", flexDirection: "column" }}>
            {product.badge && (
              <div style={{ marginBottom: "10px" }}>
                <span className="badge badge-gold">{product.badge}</span>
              </div>
            )}

            <h2 style={{ fontSize: "1.75rem", marginBottom: "12px", color: "var(--primary-900)" }}>
              {product.name}
            </h2>

            <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "20px" }}>
              {product.fullDescription}
            </p>

            {/* Features */}
            <div style={{ marginBottom: "24px" }}>
              <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--primary-900)", marginBottom: "10px", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                Öne Çıkan Özellikler
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {product.features.map((feat, idx) => (
                  <div key={idx} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.9rem", color: "var(--text-main)" }}>
                    <Check size={16} color="var(--primary-600)" style={{ flexShrink: 0 }} />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Harvest & Packaging Info */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "12px",
              marginBottom: "24px",
              padding: "14px",
              borderRadius: "14px",
              backgroundColor: "var(--bg-muted)"
            }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.78rem", fontWeight: 700, color: "var(--primary-800)" }}>
                  <Calendar size={14} />
                  <span>HASAT DÖNEMİ</span>
                </div>
                <div style={{ fontSize: "0.85rem", color: "var(--text-main)", marginTop: "3px" }}>
                  {product.harvestTime}
                </div>
              </div>

              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.78rem", fontWeight: 700, color: "var(--primary-800)" }}>
                  <Package size={14} />
                  <span>AMBALAJ ÇEŞİTLERİ</span>
                </div>
                <div style={{ fontSize: "0.85rem", color: "var(--text-main)", marginTop: "3px" }}>
                  {product.packagingTypes.join(", ")}
                </div>
              </div>
            </div>

            {/* Call for Price CTA Box */}
            <div style={{
              backgroundColor: "var(--primary-800)",
              color: "#ffffff",
              padding: "18px",
              borderRadius: "16px",
              textAlign: "center",
              marginTop: "auto"
            }}>
              <div style={{ fontSize: "0.85rem", color: "#faedcd", fontWeight: 600 }}>
                Toptan & Perakende Güncel Fiyat Bilgisi
              </div>
              <div style={{ fontSize: "1.3rem", fontWeight: 800, margin: "6px 0 14px 0" }}>
                Sipariş İçin Lütfen Arayınız
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                <a
                  href="tel:05323739605"
                  className="btn btn-gold"
                  style={{ width: "100%", padding: "12px" }}
                >
                  <Phone size={18} />
                  <span>0532 373 96 05</span>
                </a>

                <a
                  href={`https://wa.me/905323739605?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  style={{ width: "100%", padding: "12px" }}
                >
                  <MessageCircle size={18} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
