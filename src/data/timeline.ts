import { TimelineMilestone } from "@/types";

export const FARM_TIMELINE: TimelineMilestone[] = [
  {
    id: "mart-nisan",
    period: "Mart - Nisan",
    title: "İlkbahar Uyanışı & Çiçeklenme",
    description: "Kış uykusundan uyanan ceviz ve meyve ağaçlarımızın toprak havalandırması yapılır, organik kompost takviyesiyle beslenir. Çiçeklenme dönemi başlar.",
    status: "completed",
    tag: "Doğal Bakım",
    iconName: "Sprout",
    image: "/images/sera_l.jpg"
  },
  {
    id: "mayis-haziran",
    period: "Mayıs - Haziran",
    title: "Meyve Tutumu & Yayla Suyu ile Sulama",
    description: "Cevizlerimiz ve eriklerimiz meyveye durur. Dağlardan gelen temiz kaynak suları ile damla sulama yöntemi uygulanır. Hiçbir yabancı kimyasal ilaçlama yapılmaz.",
    status: "completed",
    tag: "Doğal Büyüme",
    iconName: "Droplets",
    image: "/images/ceviz3_l.jpg"
  },
  {
    id: "temmuz-agustos",
    period: "Temmuz - Ağustos",
    title: "Güneşte Olgunlaşma & Erik Hasadı",
    description: "Yaz güneşinin sıcaklığıyla erikler tam şeker oranına ulaşır. Dalından toplanan erikler doğal sergilerde Ege güneşi altında kurutulmaya başlanır. Arılarımız bal sağımı için çalışır.",
    status: "completed",
    tag: "Güneşte Kurutma",
    iconName: "Sun",
    image: "/images/erik3_l.jpg"
  },
  {
    id: "eylul-ekim",
    period: "Eylül - Ekim",
    title: "Büyük Ceviz Hasadı & Kabuk Soyma",
    description: "Cevizlerin yeşil dış kabukları çatladığında hasat başlar. Ağaçlardan silkelenen cevizlerin yeşil kabukları temizlenir, serin gölgeliklerde nemi uçurulur.",
    status: "active",
    tag: "Ana Hasat",
    iconName: "TreePine",
    image: "/images/ceviz_l.jpg"
  },
  {
    id: "kasim-aralik",
    period: "Kasım - Aralık",
    title: "El ile Kırım, Kelebek Ayıklama & Sevkiyat",
    description: "En kaliteli cevizler kelebek iç olarak el emeğiyle ayıklanır. Siparişleriniz özenle paketlenerek Türkiye'nin dört bir yanına kargolanır.",
    status: "upcoming",
    tag: "Özenli Paketleme",
    iconName: "PackageCheck",
    image: "/images/ic_ceviz_kelebek.jpg"
  },
  {
    id: "ocak-subat",
    period: "Ocak - Şubat",
    title: "Kış Dinlenmesi & Budama",
    description: "Ağaçlarımız kış dinlenmesine çekilir. Ağaçların gençleşmesi ve gelecek sezonun verimi için usta ellerce kış budaması gerçekleştirilir.",
    status: "upcoming",
    tag: "Bahçe Hazırlığı",
    iconName: "Scissors",
    image: "/images/erik2_l.jpg"
  }
];
