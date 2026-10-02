import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCallBar from "@/components/FloatingCallBar";
import ScrollToTop from "@/components/ScrollToTop";
import JsonLd from "@/components/JsonLd";

export const viewport: Viewport = {
  themeColor: "#1b4332",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pinarlik.com"),
  title: {
    default: "Pınarlık Doğal Gıda Ürünleri | Yerli Doğal Ceviz & Güneşte Kurutulmuş Erik",
    template: "%s | Pınarlık Doğal Gıda Ürünleri"
  },
  description: "Denizli Pınarlık'ın bereketli topraklarından yeni sezon ince kabuklu doğal ceviz, ayıklanmış kelebek iç ceviz, güneşte kurutulmuş erik, doğal bal ve taze mevsimlik köy mahsulleri. Fiyat ve sipariş için: 0532 373 96 05.",
  keywords: [
    "pınarlık",
    "pınarlık doğal gıda",
    "doğal ceviz",
    "ince kabuklu ceviz",
    "ayıklanmış iç ceviz",
    "kelebek iç ceviz",
    "güneşte kurutulmuş erik",
    "kuru erik",
    "denizli ceviz",
    "tavas pınarlık",
    "doğal bal",
    "yayla balı",
    "mevsimlik taze meyve",
    "köy ürünleri",
    "katkısız gıda",
    "toptan ceviz"
  ],
  authors: [{ name: "Pınarlık Doğal Gıda Ürünleri", url: "https://www.pinarlik.com" }],
  creator: "Pınarlık Doğal Gıda",
  publisher: "Pınarlık Doğal Gıda",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: "https://www.pinarlik.com",
  },
  openGraph: {
    title: "Pınarlık Doğal Gıda Ürünleri | Yerli Doğal Ceviz & Kuru Erik",
    description: "Denizli Pınarlık'tan taze hasat ince kabuklu ceviz, kelebek iç ceviz, kükürtsüz güneşte kurutulmuş erik ve doğal bal. Sipariş & Bilgi: 0532 373 96 05.",
    url: "https://www.pinarlik.com",
    siteName: "Pınarlık Doğal Gıda Ürünleri",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/images/ic_ceviz_kelebek.jpg",
        width: 1200,
        height: 630,
        alt: "Pınarlık Doğal Gıda Ürünleri - Kelebek İç Ceviz ve Doğal Hasat",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pınarlık Doğal Gıda Ürünleri | Doğal Ceviz & Kuru Erik",
    description: "Denizli Pınarlık'tan yeni sezon doğal ceviz ve güneşte kurutulmuş erik. Sipariş Hattı: 0532 373 96 05.",
    images: ["/images/ic_ceviz_kelebek.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "TR-20",
    "geo.placename": "Denizli, Tavas, Pınarlık",
    "geo.position": "37.5756;29.0722",
    "ICBM": "37.5756, 29.0722",
    "google-adsense-account": "ca-pub-0334661948018289"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        {/* Google Analytics Tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-45QQJZLKJ1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-45QQJZLKJ1');
          `}
        </Script>

        {/* Google AdSense Script */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-0334661948018289"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
      </head>
      <body>
        <JsonLd />
        <Navbar />
        <main id="main-content">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
        <FloatingCallBar />
      </body>
    </html>
  );
}
