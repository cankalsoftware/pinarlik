import React from "react";
import { PRODUCTS } from "@/data/products";
import { FAQ_ITEMS } from "@/data/faq";

export default function JsonLd() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Store", "AgriculturalBusiness"],
    "name": "Pınarlık Doğal Gıda Ürünleri",
    "alternateName": ["Pınarlık Ceviz", "Pınarlık Doğal Ürünler", "Pinarlik Dogal Gida"],
    "image": "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=1200&q=80",
    "@id": "https://www.pinarlik.com/#organization",
    "url": "https://www.pinarlik.com",
    "telephone": "+905323739605",
    "email": "bilgi@pinarlik.com",
    "priceRange": "₺₺",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Pınarlık Mahallesi, Bahçeler Mevkii",
      "addressLocality": "Tavas",
      "addressRegion": "Denizli",
      "postalCode": "20500",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 37.5756,
      "longitude": 29.0722
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "08:00",
        "closes": "21:00"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/pinarlik_dogal_gida_urunleri/"
    ],
    "description": "Denizli Pınarlık'tan taze hasat ince kabuklu doğal ceviz, ayıklanmış kelebek iç ceviz, güneşte kurutulmuş erik, doğal bal ve mevsimlik taze mahsuller.",
    "founder": {
      "@type": "Person",
      "name": "Pınarlık Doğal Gıda Üreticisi"
    }
  };

  const productSchemas = PRODUCTS.map((product) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": product.images[0],
    "description": product.shortDescription,
    "sku": product.id,
    "brand": {
      "@type": "Brand",
      "name": "Pınarlık Doğal Gıda"
    },
    "offers": {
      "@type": "Offer",
      "url": `https://www.pinarlik.com/urunler`,
      "priceCurrency": "TRY",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Pınarlık Doğal Gıda Ürünleri"
      },
      "priceSpecification": {
        "@type": "PriceSpecification",
        "description": "Fiyat ve sipariş için lütfen 0532 373 96 05 arayınız."
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "84"
    }
  }));

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {productSchemas.map((schema, index) => (
        <script
          key={`prod-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
