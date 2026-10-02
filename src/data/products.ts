import { Product } from "@/types";

export const PRODUCTS: Product[] = [
  {
    id: "kabuklu-ceviz",
    slug: "dogal-kabuklu-ceviz",
    name: "Doğal Kabuklu Ceviz",
    category: "ceviz",
    categoryLabel: "Ceviz Çeşitleri",
    badge: "En Çok Tercih Edilen",
    shortDescription: "Denizli Pınarlık bahçelerimizden yeni sezon taze hasat, ince kabuklu, dolgun ve yağ oranı yüksek yerli ceviz.",
    fullDescription: "Pınarlık'ın bereketli topraklarında, bol güneş ve temiz yayla havasıyla yetişen yerli cevizlerimiz; kimyasal gübre ve koruyucu madde kullanılmadan yetiştirilir. İnce kabuklu yapısı sayesinde elle dahi kolayca kırılır. İç doluluk oranı %90'ın üzerindedir. Hasat sonrası doğal gölgede ve havadar sergilerde kurutularak tazeliğini uzun süre muhafaza etmesi sağlanır.",
    features: [
      "Yeni sezon taze hasat",
      "İnce kabuklu, elle kolay kırılabilir",
      "Yüksek iç randımanı ve zengin Omega-3 & E vitamini",
      "Kimyasal beyazlatıcı ve klor içermez",
      "100% Doğal köy mahsulü"
    ],
    harvestTime: "Eylül - Ekim (Tüm yıl stoklu)",
    packagingTypes: ["5 Kg Çuval / Koli", "10 Kg Çuval", "25 Kg Toptan Çuval"],
    storageTips: "Serin, kuru ve doğrudan güneş ışığı almayan havadar bir yerde muhafaza ediniz.",
    images: [
      "/images/ceviz_l.jpg",
      "/images/ceviz3_l.jpg",
      "/images/ceviz.jpg"
    ],
    isFeatured: true,
    orderNotes: "Toptan ve perakende siparişleriniz için güncel fiyat ve kargo detaylarını telefonla öğrenebilirsiniz."
  },
  {
    id: "kelebek-ic-ceviz",
    slug: "kelebek-ayiklanmis-ic-ceviz",
    name: "Ayıklanmış Kelebek İç Ceviz (Yemeye Hazır)",
    category: "ceviz",
    categoryLabel: "Ceviz Çeşitleri",
    badge: "Özel Seçim • Kelebek",
    shortDescription: "Özenle kırılıp ayıklanmış, açık renkli, kırılmamış kelebek formunda yemeye hazır taze iç ceviz.",
    fullDescription: "Kendi bahçelerimizin en kaliteli cevizlerinin el emeğiyle tek tek kırılarak kelebek (bütün) formunun korunmasıyla hazırlanır. Taze, çıtır ve lezzetli aromasıyla kahvaltılarınızın, tatlılarınızın ve sağlıklı atıştırmalıklarınızın vazgeçilmezidir. Hiçbir katkı maddesi, koruyucu veya kimyasal işlem görmeden vakumlu ya da hava almayan özel ambalajlarda gönderilir.",
    features: [
      "El emeğiyle özenle ayıklanmış kelebek iç",
      "Açık renkli, acılaşmamış taze lezzet",
      "Doğal sağlıklı yağlar, protein ve lif kaynağı",
      "Çocuklar ve sporcular için enerji deposu",
      "Hemen tüketime ve tariflere hazır"
    ],
    harvestTime: "Tüm Yıl Taze Kırımlı",
    packagingTypes: ["500 gr Kilitli Doypack", "1 Kg Vakumlu Paket", "5 Kg Koli"],
    storageTips: "Buzdolabında veya hava almayan cam kavanozda serin yerde muhafaza edildiğinde tazeliğini 1 yıla kadar korur.",
    images: [
      "/images/ic_ceviz_kelebek.jpg",
      "/images/ic_ceviz_hazir.jpg"
    ],
    isFeatured: true,
    orderNotes: "Sipariş üzerine taze kırılarak hazırlandığı için lütfen önceden telefonla bilgi alınız."
  },
  {
    id: "guneste-kurutulmus-erik",
    slug: "guneste-kurutulmus-dogal-kuru-erik",
    name: "Güneşte Kurutulmuş Doğal Kuru Erik",
    category: "kuru-meyve",
    categoryLabel: "Kurutulmuş Meyveler",
    badge: "Katkısız & Kükürtsüz",
    shortDescription: "Geleneksel yöntemlerle, Ege güneşi altında kükürtsüz ve ilave şekersiz doğal kurutulmuş erik.",
    fullDescription: "Pınarlık bahçelerimizdeki erik ağaçlarından tam olgunluk döneminde toplanan erikler, hiçbir kimyasal kükürtleme veya koruyucu maddeye maruz bırakılmadan, yalnızca temiz dağ havası ve doğal güneş ışığında sergilerde kurutulur. Kendi meyve şekeri ve zengin aromasıyla sindirim dostu, yoğun antioksidan ve mineral kaynağı eşsiz bir lezzettir.",
    features: [
      "100% Güneşte doğal kurutma",
      "Kükürt (SO2) ve koruyucu madde içermez",
      "İlave şeker veya tatlandırıcı yok",
      "Yüksek lif ve demir oranıyla sindirimi destekler",
      "Hoşaf, komposto ve sağlıklı atıştırmalık için ideal"
    ],
    harvestTime: "Ağustos - Eylül Hasadı",
    packagingTypes: ["500 gr Paket", "1 Kg Paket", "5 Kg Koli"],
    storageTips: "Serin, rutubetsiz ortamda bez torbada veya cam kavanozda saklayınız.",
    images: [
      "/images/erik.jpg",
      "/images/erik3_l.jpg",
      "/images/erik2_l.jpg"
    ],
    isFeatured: true,
    orderNotes: "Doğal kurutma olduğu için stok durumuna göre telefonla güncel bilgi alınız."
  },
  {
    id: "dogal-yayla-bali",
    slug: "saf-dogal-yayla-ve-cam-bali",
    name: "Doğal Ham Bal & Petek Balı",
    category: "bal",
    categoryLabel: "Doğal Bal & Arılık",
    badge: "Ham Petek & Kavanoz Bal",
    shortDescription: "Yüksek rakımlı yayla çiçekleri ve çam ormanlarından sağılmış, petekli ve kavanozlu saf ham bal.",
    fullDescription: "Arılarımızın Denizli'nin yüksek rakımlı yaylalarındaki kekik, adaçayı, geven ve çam ormanlarından topladığı nektarlarla ürettiği %100 saf balımız. Hiçbir şeker şurubu takviyesi yapılmadan, pastörizasyon ve yüksek ısı uygulanmadan petekten süzülerek veya doğrudan doğal peteğiyle kavanozlanır. Enzimleri, poleni ve besin değerleri bütünüyle korunmuştur.",
    features: [
      "Ham (Raw) ve filtrelenmemiş saf petek & kavanoz balı",
      "Şeker şurubu veya glikoz kesinlikle içermez",
      "Zengin doğal polen, enzim ve mineral içeriği",
      "Doğal kristalize olabilen hakiki köy balı",
      "Kahvaltılık ve bağışıklık desteği"
    ],
    harvestTime: "Yaz ve Sonbahar Sağımları",
    packagingTypes: ["850 gr Cam Kavanoz", "1 Kg Cam Kavanoz", "Karakovan Doğal Petek"],
    storageTips: "Oda sıcaklığında, doğrudan güneş görmeyen yerde saklayınız. 1 yaşından küçük bebeklere bal verilmemelidir.",
    images: [
      "/images/honeycomb_petek.jpg",
      "/images/bal_kavanoz_ari.jpg",
      "/images/bal_l.jpg",
      "/images/bal2_l.jpg"
    ],
    isFeatured: true,
    orderNotes: "Sınırlı üretim parti mahsulü olduğu için lütfen arayarak sipariş teyidi alınız."
  },
  {
    id: "mevsimlik-meyve-sebze",
    slug: "bahceden-taze-mevsimlik-meyve-ve-sebzeler",
    name: "Doğal Sera & Mevsimlik Taze Mahsuller",
    category: "mevsimlik",
    categoryLabel: "Mevsimlik Mahsuller",
    badge: "Doğal Sera & Dalından",
    shortDescription: "Pınarlık seramızdan ve bahçemizden mevsimine göre taze toplanan domates, biber, meyveler ve goji berry.",
    fullDescription: "Pınarlık'taki doğal seramızda ve bahçemizde kimyasal ilaçlama yapılmadan, temiz yayla suları ile yetiştirdiğimiz taze mahsullerimiz ve meyvelerimiz. Sezonunda taze toplanarak doğrudan gönderilir.",
    features: [
      "Doğal serada ve açık bahçede yetiştirilen taze ürünler",
      "Hormonsuz ve kimyasal ilaçsız üretim",
      "Toplandığı gün tazeliğinde sevkiyat",
      "Geleneksel köy bahçesi lezzeti"
    ],
    harvestTime: "İlkbahar, Yaz ve Sonbahar Dönemleri",
    packagingTypes: ["Özel Havalandırmalı Kasa / Koli (5 Kg - 10 Kg)"],
    storageTips: "Tazeliğini korumak için serin ortamda muhafaza ediniz.",
    images: [
      "/images/sera_l.jpg",
      "/images/goji2_l.jpg",
      "/images/erik2_l.jpg"
    ],
    isFeatured: false,
    orderNotes: "Mevsimlik mahsuller dönemsel olarak değişmektedir. Güncel haftalık hasat için arayınız."
  },
  {
    id: "koy-tarhanasi-ve-pekmez",
    slug: "geleneksel-koy-tarhanasi-ve-dogal-pekmez",
    name: "Geleneksel Ev Tarhanası & Doğal Pekmez",
    category: "koy-urunleri",
    categoryLabel: "Köy Ürünleri & Kiler",
    badge: "Anne Eli Lezzeti",
    shortDescription: "Köyümüzün kadınları tarafından bol yoğurt, sebze ve taze baharatlarla yoğrulan tarhana ve odun ateşinde pekmez.",
    fullDescription: "Yüzyıllık Anadolu tarifleriyle hazırlanan ev tarhanamız; bol köy yoğurdu, domates, kırmızı kapya biber, nane ve soğanla mayalanır. Güneşte kurutulup elden geçirilerek sofralarınıza gelir. Odun ateşinde ağır ağır kaynatılan doğal pekmezimiz ise hiçbir ilave şeker içermez.",
    features: [
      "Bol köy yoğurdu ve taze sebzelerle yoğrulmuş tarhana",
      "Geleneksel odun ateşinde pişirilmiş pekmez",
      "Katkı, koruyucu ve renklendirici içermez",
      "Kış ayları için şifa ve enerji kaynağı"
    ],
    harvestTime: "Yaz Sonu Hazırlığı",
    packagingTypes: ["1 Kg Bez Torba (Tarhana)", "1 Kg Cam Şişe (Pekmez)"],
    storageTips: "Kuru ve serin yerde, doğrudan ışıktan uzakta saklayınız.",
    images: [
      "/images/sera_l.jpg",
      "/images/goji2_l.jpg"
    ],
    isFeatured: false,
    orderNotes: "Kiler ürünlerimiz sınırlı miktarda hazırlanmaktadır. Lütfen telefonla stok sorunuz."
  }
];
