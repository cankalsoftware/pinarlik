# 🌰 Pınarlık Doğal Gıda Ürünleri - Modern Web Platformu

Denizli Pınarlık'ın bereketli topraklarında yetişen **Doğal İnce Kabuklu Ceviz**, **Kelebek İç Ceviz**, **Güneşte Kurutulmuş Doğal Erik**, **Yayla & Çam Balı** ve mevsimlik köy mahsullerinin tanıtımı, toptan/perakende sipariş yönetimi ve dijital vitrini.

Eski AngularJS web sayfası; en güncel **Next.js (App Router)**, **TypeScript**, **pnpm**, **kapsamlı SEO / AEO / GEO optimizasyonu**, **Google Analytics** ve **Google AdSense** entegrasyonuyla modernize edilmiştir.

---

## 🌟 Öne Çıkan Özellikler

- **Modern & Hızlı Mimari:** Next.js 16 (App Router) + TypeScript + pnpm.
- **Doğrudan İletişim & Sipariş:** 
  - Sipariş & Bilgi Hattı: `0532 373 96 05` (Tüm ürünlerde *"Fiyat ve Sipariş İçin Arayınız"* modeli, tek tıkla arama ve WhatsApp sipariş butonu).
  - İletişim & Sipariş Formu: `bilgi@pinarlik.com` hedefli, Nodemailer SMTP destekli API rotası (`/api/contact`).
- **Öne Çıkan Ana Ürünler:**
  - 🌰 **Doğal Kabuklu Ceviz:** İnce kabuklu, elle kolay kırılan, dolgun içli yeni sezon yerli ceviz.
  - 🦋 **Ayıklanmış Kelebek İç Ceviz:** El emeğiyle ayıklanmış, bembeyaz, yemeye hazır bütün iç ceviz.
  - ☀️ **Güneşte Kurutulmuş Doğal Erik:** Kükürtsüz (SO2 içermez), ilave şekersiz geleneksel güneşte kurutma.
  - 🍯 **Doğal Yayla & Çam Balı:** Ham, filtrelenmemiş saf köy balı.
  - 🍎 **Mevsimlik Mahsuller & Köy Kileri:** Dalından taze meyveler, el yapımı tarhana ve pekmez.
- **Instagram Entegrasyonu & Fotoğraf Galerisi:**
  - Instagram [@pinarlikdogalgida](https://www.instagram.com/pinarlikdogalgida/) canlı görsel akışı, hasat ve bahçe fotoğrafları, lightbox görsel önizleme.
- **Bahçe & Hasat Zaman Çizelgesi (Timeline):**
  - Ağaçların ilkbahar uyanışından güneşte kurutmaya, ceviz hasadından kış bakımına kadar yıllık döngü; gelecekte Gmail/Instagram akışıyla otomatik beslenmeye hazır mimari.
- **AEO & GEO (Answer Engine & Generative Engine Optimization):**
  - ChatGPT Search, Perplexity ve Google SGE için optimize edilmiş SSS (FAQ) akordeon ve `FAQPage`, `LocalBusiness`, `Product`, `BreadcrumbList` JSON-LD Schema işaretlemeleri.
- **Google Analytics:** Ölçüm Kimliği `G-45QQJZLKJ1`.
- **Google AdSense:** Yayıncı Kimliği `pub-0334661948018289`, Müşteri Kimliği `6220702743`.
- **Otomatik SEO Araçları:** Dinamik `sitemap.xml`, `robots.txt`, `manifest.webmanifest`, OpenGraph & Twitter kartları, Denizli/Tavas Geo meta etiketleri.

---

## 🚀 Yerel Geliştirme (Local Setup)

Projeyi bilgisayarınızda çalıştırmak için:

```bash
# Bağımlılıkları yükleyin
pnpm install

# Geliştirme sunucusunu başlatın
pnpm dev

# Tarayıcıda açın:
# http://localhost:3000
```

---

## ⚙️ SMTP & E-Posta Ayarları (`.env.local`)

Web sitesindeki iletişim ve sipariş formundan gelen mesajların doğrudan `bilgi@pinarlik.com` adresine düşmesi için projenin kök dizinindeki `.env.local` dosyasına e-posta sağlayıcınızın bilgilerini giriniz:

```env
CONTACT_RECEIVER_EMAIL=bilgi@pinarlik.com
SMTP_HOST=mail.pinarlik.com
SMTP_PORT=587
SMTP_USER=bilgi@pinarlik.com
SMTP_PASS=EPOSTA_SIFRENIZ
```

> *Not:* Şifre girilmediğinde sistem hata vermez; test amacıyla form mesajlarını güvenle sunucu terminaline loglar.

---

## 📦 GitHub ve Vercel Yayını

Projeyi GitHub ve Vercel'e yüklemek için:

1. **GitHub'a Gönderme:**
```bash
git add .
git commit -m "feat: modern Next.js TypeScript website for Pinarlik"
git branch -M main
git remote add origin https://github.com/KULLANICI_ADINIZ/pinarlik.git
git push -u origin main
```

2. **Vercel'e Dağıtım:**
- [Vercel Dashboard](https://vercel.com/new)'a girip GitHub reponuzu seçin.
- **Environment Variables** kısmına `.env.local` dosyasındaki değişkenleri (özellikle `SMTP_PASS` vb.) ekleyin.
- **Deploy** butonuna tıklayın.

---

## 📞 İletişim Bilgileri

- **Firma:** Pınarlık Doğal Gıda Ürünleri
- **Telefon / Sipariş:** 0532 373 96 05
- **E-Posta:** bilgi@pinarlik.com
- **Instagram:** [@pinarlikdogalgida](https://www.instagram.com/pinarlikdogalgida/)
- **Konum:** Pınarlık Mahallesi, Tavas / Denizli, Türkiye
