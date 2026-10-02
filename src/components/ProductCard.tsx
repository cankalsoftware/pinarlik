"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Phone, MessageCircle, Info, Check, ShieldCheck } from "lucide-react";
import { Product } from "@/types";
import ProductDetailModal from "./ProductDetailModal";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const whatsappMessage = encodeURIComponent(
    `Merhaba, Pınarlık Doğal Gıda web sitenizden "${product.name}" ürününüz hakkında bilgi ve güncel fiyat öğrenmek istiyorum.`
  );

  return (
    <>
      <div
        id={product.id}
        className="card-organic"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          position: "relative"
        }}
      >
        {/* Product Image Area */}
        <div style={{ position: "relative", height: "240px", width: "100%", backgroundColor: "#e2e8f0", overflow: "hidden" }}>
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
            className="product-img-zoom"
          />

          {/* Badge */}
          {product.badge && (
            <div style={{ position: "absolute", top: "14px", left: "14px", zIndex: 2 }}>
              <span className="badge badge-gold" style={{ boxShadow: "0 4px 10px rgba(0,0,0,0.15)" }}>
                {product.badge}
              </span>
            </div>
          )}

          {/* Category Tag */}
          <div style={{ position: "absolute", bottom: "14px", right: "14px", zIndex: 2 }}>
            <span className="badge badge-outline" style={{ fontSize: "0.75rem" }}>
              {product.categoryLabel}
            </span>
          </div>
        </div>

        {/* Content Area */}
        <div style={{ padding: "24px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
          <h3
            style={{
              fontSize: "1.35rem",
              marginBottom: "10px",
              color: "var(--primary-900)",
              fontFamily: "var(--font-serif)"
            }}
          >
            {product.name}
          </h3>

          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "0.92rem",
              lineHeight: 1.6,
              marginBottom: "16px",
              flexGrow: 1
            }}
          >
            {product.shortDescription}
          </p>

          {/* Quick bullet highlights */}
          <div style={{ marginBottom: "20px" }}>
            {product.features.slice(0, 3).map((feat, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "0.85rem",
                  color: "var(--text-main)",
                  marginBottom: "6px"
                }}
              >
                <Check size={14} color="var(--primary-600)" style={{ flexShrink: 0 }} />
                <span>{feat}</span>
              </div>
            ))}
          </div>

          {/* Prominent Price & Order Notice Banner */}
          <div
            style={{
              backgroundColor: "var(--primary-50)",
              border: "1.5px dashed var(--primary-600)",
              borderRadius: "12px",
              padding: "12px 14px",
              textAlign: "center",
              marginBottom: "18px"
            }}
          >
            <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--primary-700)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Toptan & Perakende Satış
            </div>
            <div style={{ fontSize: "1rem", fontWeight: 800, color: "var(--primary-900)", marginTop: "2px" }}>
              Fiyat ve Sipariş İçin Arayınız
            </div>
          </div>

          {/* Action CTAs */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "10px" }}>
            <a
              href="tel:05323739605"
              className="btn btn-primary"
              style={{ padding: "11px 8px", fontSize: "0.88rem" }}
              title="Doğrudan Ara: 0532 373 96 05"
            >
              <Phone size={16} />
              <span>0532 373 96 05</span>
            </a>

            <a
              href={`https://wa.me/905323739605?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ padding: "11px 8px", fontSize: "0.88rem" }}
              title="WhatsApp ile Sor"
            >
              <MessageCircle size={16} />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Detail modal trigger */}
          <button
            onClick={() => setIsModalOpen(true)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              padding: "8px",
              fontSize: "0.85rem",
              color: "var(--primary-700)",
              fontWeight: 600,
              borderRadius: "8px",
              backgroundColor: "transparent",
              width: "100%"
            }}
            className="hover-underline"
          >
            <Info size={15} />
            <span>Detaylı Ürün Bilgisi & Özellikler</span>
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <ProductDetailModal
          product={product}
          onClose={() => setIsModalOpen(false)}
        />
      )}

      <style jsx>{`
        .product-img-zoom:hover {
          transform: scale(1.06);
        }
        .hover-underline:hover {
          text-decoration: underline;
          color: var(--primary-900);
        }
      `}</style>
    </>
  );
}
