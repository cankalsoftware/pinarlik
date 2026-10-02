export interface Product {
  id: string;
  slug: string;
  name: string;
  category: "ceviz" | "kuru-meyve" | "bal" | "mevsimlik" | "koy-urunleri";
  categoryLabel: string;
  badge?: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  harvestTime: string;
  packagingTypes: string[];
  storageTips: string;
  images: string[];
  isFeatured: boolean;
  orderNotes?: string;
}

export interface InstagramPost {
  id: string;
  caption: string;
  imageUrl: string;
  postUrl: string;
  date: string;
  likes: number;
  comments: number;
  tags: string[];
}

export interface TimelineMilestone {
  id: string;
  period: string;
  title: string;
  description: string;
  status: "completed" | "active" | "upcoming";
  tag: string;
  iconName: string;
  image?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "siparis" | "urunler" | "teslimat" | "kalite";
}

export interface ContactFormData {
  fullName: string;
  phone: string;
  email?: string;
  productInterest: string;
  message: string;
}
