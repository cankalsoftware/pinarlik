"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Heart, MessageCircle, ExternalLink, ArrowUpRight, X, Sparkles, CheckCircle2 } from "lucide-react";
import InstagramIcon from "@/components/InstagramIcon";
import { INSTAGRAM_POSTS, INSTAGRAM_HANDLE, INSTAGRAM_PROFILE_URL } from "@/data/instagram";
import { InstagramPost } from "@/types";

export default function InstagramFeed() {
  const [selectedPost, setSelectedPost] = useState<InstagramPost | null>(null);

  return (
    <section className="section-padding" style={{ backgroundColor: "var(--bg-main)" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge badge-gold">
            <InstagramIcon size={14} />
            <span>Canlı Instagram Akışı</span>
          </div>
          <h2 className="section-title">Bahçemizden ve Hasattan Güncel Kareler</h2>
          <p className="section-subtitle">
            Pınarlık bahçelerimizdeki günlük üretim, taze ceviz kırım anları ve güneşte kurutma süreçlerimizi Instagram sayfamızda paylaşıyoruz.
          </p>
        </div>

        {/* Instagram Profile Header Card */}
        <div
          style={{
            backgroundColor: "#ffffff",
            border: "1px solid var(--border-light)",
            borderRadius: "20px",
            padding: "24px 30px",
            marginBottom: "36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "20px",
            boxShadow: "var(--shadow-sm)"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
            <div
              style={{
                width: "68px",
                height: "68px",
                borderRadius: "50%",
                background: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                padding: "3px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  backgroundColor: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--primary-800)",
                  fontWeight: 800,
                  fontSize: "1.2rem",
                  fontFamily: "var(--font-serif)"
                }}
              >
                P
              </div>
            </div>

            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <h3 style={{ fontSize: "1.25rem", color: "var(--primary-900)", margin: 0 }}>
                  @{INSTAGRAM_HANDLE}
                </h3>
                <CheckCircle2 size={18} color="#0095f6" fill="#0095f6" stroke="#ffffff" />
              </div>
              <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", marginTop: "4px" }}>
                Pınarlık Doğal Gıda Ürünleri • Denizli Tavas Doğal Köy Mahsulleri
              </p>
            </div>
          </div>

          <a
            href={INSTAGRAM_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{
              padding: "12px 24px",
              background: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
              border: "none"
            }}
          >
            <InstagramIcon size={18} color="#ffffff" />
            <span>Instagram&apos;da Takip Et</span>
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Posts Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px"
          }}
        >
          {INSTAGRAM_POSTS.map((post) => (
            <div
              key={post.id}
              onClick={() => setSelectedPost(post)}
              style={{
                position: "relative",
                height: "320px",
                borderRadius: "16px",
                overflow: "hidden",
                cursor: "pointer",
                boxShadow: "var(--shadow-sm)",
                border: "1px solid var(--border-light)"
              }}
              className="insta-card"
            >
              <Image
                src={post.imageUrl}
                alt={post.caption}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: "cover", transition: "transform 0.4s ease" }}
                className="insta-img"
              />

              {/* Top Tag & Instagram Icon */}
              <div
                style={{
                  position: "absolute",
                  top: "12px",
                  right: "12px",
                  zIndex: 2,
                  width: "34px",
                  height: "34px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  backdropFilter: "blur(4px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff"
                }}
              >
                <InstagramIcon size={18} color="#ffffff" />
              </div>

              {/* Hover Overlay */}
              <div
                className="insta-overlay"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background: "linear-gradient(to top, rgba(13, 40, 24, 0.95) 0%, rgba(13, 40, 24, 0.4) 60%, transparent 100%)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: "20px",
                  color: "#ffffff",
                  transition: "all 0.3s ease"
                }}
              >
                <div style={{ display: "flex", gap: "16px", marginBottom: "10px", fontSize: "0.88rem", fontWeight: 700 }}>
                  <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    <Heart size={16} fill="#ff4d4f" color="#ff4d4f" /> {post.likes}
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    <MessageCircle size={16} fill="#ffffff" color="#ffffff" /> {post.comments}
                  </span>
                </div>

                <p
                  style={{
                    fontSize: "0.85rem",
                    lineHeight: 1.5,
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    color: "#f1f5f9"
                  }}
                >
                  {post.caption}
                </p>

                <div style={{ marginTop: "10px", display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "0.75rem", color: "#d4a373" }}>
                  <span>{post.date}</span>
                  <span style={{ display: "flex", alignItems: "center", gap: "4px", fontWeight: 600 }}>
                    İncele <ExternalLink size={12} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <a
            href={INSTAGRAM_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            style={{ padding: "14px 32px" }}
          >
            <InstagramIcon size={18} />
            <span>Tüm Paylaşımlar İçin Instagram @{INSTAGRAM_HANDLE}</span>
          </a>
        </div>
      </div>

      {/* Post Modal Preview */}
      {selectedPost && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            backdropFilter: "blur(6px)",
            zIndex: 2000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px"
          }}
          onClick={() => setSelectedPost(null)}
        >
          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "20px",
              maxWidth: "800px",
              width: "100%",
              overflow: "hidden",
              position: "relative",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPost(null)}
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

            <div style={{ position: "relative", minHeight: "360px", backgroundColor: "#000" }}>
              <Image
                src={selectedPost.imageUrl}
                alt={selectedPost.caption}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>

            <div style={{ padding: "30px", display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
                <InstagramIcon size={20} color="#e1306c" />
                <span style={{ fontWeight: 700, color: "var(--primary-900)" }}>@{INSTAGRAM_HANDLE}</span>
                <span style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>• {selectedPost.date}</span>
              </div>

              <p style={{ color: "var(--text-main)", fontSize: "0.95rem", lineHeight: 1.7, flexGrow: 1, marginBottom: "20px" }}>
                {selectedPost.caption}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "24px" }}>
                {selectedPost.tags.map((t, idx) => (
                  <span key={idx} className="badge badge-primary" style={{ fontSize: "0.75rem" }}>
                    #{t}
                  </span>
                ))}
              </div>

              <div style={{ display: "flex", gap: "12px" }}>
                <a
                  href={INSTAGRAM_PROFILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ flexGrow: 1, padding: "12px" }}
                >
                  <InstagramIcon size={16} color="#ffffff" />
                  <span>Instagram&apos;da Aç</span>
                </a>
                <a
                  href="tel:05323739605"
                  className="btn btn-gold"
                  style={{ padding: "12px 18px" }}
                >
                  <span>Ara: 0532 373 96 05</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .insta-card:hover .insta-img {
          transform: scale(1.08);
        }
      `}</style>
    </section>
  );
}
