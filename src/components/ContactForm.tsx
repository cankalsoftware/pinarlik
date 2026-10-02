"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Phone, Mail, Loader2 } from "lucide-react";
import { ContactFormData } from "@/types";

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    phone: "",
    email: "",
    productInterest: "Doğal Kabuklu Ceviz",
    message: ""
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          productInterest: "Doğal Kabuklu Ceviz",
          message: ""
        });
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Mesajınız iletilirken bir hata oluştu. Lütfen doğrudan telefonla arayınız.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Sunucu ile bağlantı kurulamadı. Lütfen 0532 373 96 05 numarasından doğrudan arayınız.");
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "24px",
        padding: "36px",
        boxShadow: "var(--shadow-md)",
        border: "1px solid var(--border-light)"
      }}
    >
      <div style={{ marginBottom: "24px" }}>
        <h3 style={{ fontSize: "1.5rem", color: "var(--primary-900)", marginBottom: "8px" }}>
          Sipariş & Bilgi Talep Formu
        </h3>
        <p style={{ color: "var(--text-muted)", fontSize: "0.92rem" }}>
          Ürünlerimiz, toptan/perakende fiyatları veya sipariş için bilgilerinizi bırakın, en kısa sürede sizi arayalım.
        </p>
      </div>

      {status === "success" ? (
        <div
          style={{
            backgroundColor: "var(--primary-50)",
            border: "2px solid var(--primary-500)",
            borderRadius: "16px",
            padding: "30px",
            textAlign: "center"
          }}
        >
          <div style={{ display: "inline-flex", color: "var(--primary-600)", marginBottom: "14px" }}>
            <CheckCircle2 size={54} />
          </div>
          <h4 style={{ fontSize: "1.3rem", color: "var(--primary-900)", marginBottom: "8px" }}>
            Talebiniz Başarıyla Alındı!
          </h4>
          <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "20px" }}>
            Pınarlık Doğal Gıda ekibi olarak en kısa sürede belirttiğiniz telefon numarasından sizinle iletişime geçeceğiz.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="btn btn-outline"
            style={{ padding: "10px 22px" }}
          >
            Yeni Mesaj Gönder
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {status === "error" && (
            <div
              style={{
                backgroundColor: "#fff1f0",
                border: "1px solid #ffa39e",
                borderRadius: "12px",
                padding: "14px",
                marginBottom: "20px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                color: "#cf1322",
                fontSize: "0.9rem"
              }}
            >
              <AlertCircle size={20} style={{ flexShrink: 0 }} />
              <div>{errorMessage}</div>
            </div>
          )}

          <div className="form-group">
            <label className="form-label" htmlFor="fullName">
              Adınız ve Soyadınız <span style={{ color: "#e11d48" }}>*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Örn: Ahmet Yılmaz"
              className="form-input"
            />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
            <div className="form-group">
              <label className="form-label" htmlFor="phone">
                Telefon Numaranız <span style={{ color: "#e11d48" }}>*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="Örn: 0532 XXX XX XX"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="email">
                E-Posta Adresiniz (İsteğe Bağlı)
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Örn: ahmet@gmail.com"
                className="form-input"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="productInterest">
              İlgilendiğiniz Ürün / Talep Türü
            </label>
            <select
              id="productInterest"
              name="productInterest"
              value={formData.productInterest}
              onChange={handleChange}
              className="form-select"
            >
              <option value="Doğal Kabuklu Ceviz">Doğal Kabuklu Ceviz (Yeni Sezon)</option>
              <option value="Ayıklanmış Kelebek İç Ceviz">Ayıklanmış Kelebek İç Ceviz (Yemeye Hazır)</option>
              <option value="Güneşte Kurutulmuş Doğal Erik">Güneşte Kurutulmuş Doğal Erik</option>
              <option value="Doğal Yayla & Çam Balı">Doğal Yayla & Çam Balı</option>
              <option value="Mevsimlik Meyve & Sebzeler">Mevsimlik Taze Meyve & Sebzeler</option>
              <option value="Geleneksel Köy Ürünleri">Geleneksel Köy Tarhanası & Pekmez</option>
              <option value="Toptan Alım ve Ticari Satış">Toptan Alım / Bayilik Talebi</option>
              <option value="Genel Bilgi">Diğer / Genel Bilgi</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="message">
              Mesajınız veya Miktar / Teslimat Notunuz <span style={{ color: "#e11d48" }}>*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Sipariş vermek istediğiniz miktar (Örn: 10 kg kabuklu ceviz, 2 kg iç ceviz) veya sormak istediğiniz soruları buraya yazabilirsiniz..."
              className="form-textarea"
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="btn btn-primary"
            style={{ width: "100%", padding: "14px", fontSize: "1rem" }}
          >
            {status === "loading" ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                <span>Gönderiliyor...</span>
              </>
            ) : (
              <>
                <Send size={18} />
                <span>Talebi İlet (En Kısa Sürede Arayalım)</span>
              </>
            )}
          </button>

          <div style={{ textAlign: "center", marginTop: "16px", fontSize: "0.82rem", color: "var(--text-light)" }}>
            🔒 Bilgileriniz yalnızca sipariş ve bilgi amacıyla kullanılacak, gizli tutulacaktır.
          </div>
        </form>
      )}
    </div>
  );
}
