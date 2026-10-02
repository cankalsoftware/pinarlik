import { Product } from "@/types";

export const PRODUCTS: Product[] = [
  {
    id: "kabuklu-ceviz",
    slug: "dogal-kabuklu-ceviz",
    name: "Doğal Kabuklu Ceviz",
    category: "ceviz",
    categoryLabel: "Ceviz Çeşitleri",
    badge: "En Çok Tercih Edilen",
    shortDescription: "Denizli Pınarlık bahçelerimizden taze hasat, ince kabuklu, dolgun ve yağ oranı yüksek yerli ceviz.",
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
      "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&w=1000&q=80"
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
      "https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=1000&q=80"
    ],
    isFeatured: true,
    orderNotes: "Sipariş üzerine taze kırılarak hazırlandığı için lütfen önceden telefonla bilgi alınız."
  },
  {
    id: "guneste-kurutulmus-erik",
    slug: "guneste-kurutulmus-dogal-kuru-erik",
    name: "Güneşte Kurutulmuş Doğal Erik",
    category: "kuru-meyve",
    categoryLabel: "Kurutulmuş Meyveler",
    badge: "Katkısız & Şekersiz",
    shortDescription: "Geleneksel yöntemlerle, Ege güneşinde ağır ağır kurutulmuş, kükürtsüz ve şeker ilavesiz kuru erik.",
    fullDescription: "Pınarlık bahçelerimizdeki erik ağaçlarından tam olgunluk döneminde toplanan erikler, hiçbir kimyasal kükürtleme veya koruyucu maddeye maruz bırakılmadan, yalnızca temiz dağ havası ve doğal güneş ışığında sergilerde kurutulur. Kendi meyve şekeri ve zengin aromasıyla sindirim dostu, yoğun antioksidan ve mineral kaynağı eşsiz bir lezzettir.",
    features: [
      "100% Güneşte doğal kurutma",
      "Kükürt (SO2) ve koruyucu madde içermez",
      "İlave şeker veya tatlandırıcı yok",
      "Yüksek lif ve demir oranıyla sindirimi destekler",
      "Hoşaf, komposto ve ara öğünler için ideal"
    ],
    harvestTime: "Ağustos - Eylül Hasadı",
    packagingTypes: ["500 gr Paket", "1 Kg Paket", "5 Kg Koli"],
    storageTips: "Serin, rutubetsiz ortamda bez torbada veya cam kavanozda saklayınız.",
    images: [
      "https://images.unsplash.com/photo-1568584711271-6c929fb49b60?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=1000&q=80"
    ],
    isFeatured: true,
    orderNotes: "Doğal kurutma olduğu için stok durumuna göre telefonla güncel bilgi alınız."
  },
  {
    id: "dogal-yayla-bali",
    slug: "saf-dogal-yayla-ve-cam-bali",
    name: "Doğal Yayla ve Çam Balı",
    category: "bal",
    categoryLabel: "Doğal Bal & Arı Ürünleri",
    badge: "Ham & Filtresiz",
    shortDescription: "Denizli yaylalarının zengin çiçek florasından ve çam ormanlarından sağılmış, ısıtılmamış saf ham bal.",
    fullDescription: "Arılarımızın Denizli'nin yüksek rakımlı yaylalarındaki kekik, adaçayı, geven ve çam ormanlarından topladığı nektarlarla ürettiği %100 saf balımız. Hiçbir şeker şurubu takviyesi yapılmadan, pastörizasyon ve yüksek ısı uygulanmadan petekten süzülerek kavanozlanır. Enzimleri ve besin değerleri bütünüyle korunmuştur.",
    features: [
      "Ham (Raw) ve filtrelenmemiş saf bal",
      "Şeker şurubu veya glikoz kesinlikle içermez",
      "Zengin polen, enzim ve mineral içeriği",
      "Doğal kristalize olabilen hakiki köy balı",
      "Kahvaltılık ve bağışıklık desteği"
    ],
    harvestTime: "Yaz ve Sonbahar Sağımları",
    packagingTypes: ["850 gr Cam Kavanoz", "1 Kg Cam Kavanoz", "Karakovan Petek"],
    storageTips: "Oda sıcaklığında, doğrudan güneş görmeyen yerde saklayınız. 1 yaşından küçük bebeklere bal verilmemelidir.",
    images: [
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=1000&q=80"
    ],
    isFeatured: true,
    orderNotes: "Sınırlı üretim parti mahsulü olduğu için lütfen arayarak sipariş teyidi alınız."
  },
  {
    id: "mevsimlik-meyve-sebze",
    slug: "bahceden-taze-mevsimlik-meyve-ve-sebzeler",
    name: "Bahçeden Taze Mevsimlik Meyve & Sebzeler",
    category: "mevsimlik",
    categoryLabel: "Mevsimlik Mahsuller",
    badge: "Dalından Sofraya",
    shortDescription: "Mevsimine göre bahçemizden taze toplanan elma, incir, üzüm, domates, biber ve taze köy mahsulleri.",
    fullDescription: "Pınarlık'taki bahçemizde doğanın ritmine saygıyla yetiştirdiğimiz meyve ve sebzeler. Sezonuna göre taze toplanarak aynı gün kargoya verilir veya yerinden teslim edilir. Ağacında olgunlaşmış sulu elmalar, tatlı incirler, kokulu köy üzümleri ve doğal tarla domatesleri.",
    features: [
      "Mevsiminde, dalında güneşle olgunlaşmış",
      "Hormonsuz ve doğal yöntemlerle üretim",
      "Toplandığı gün tazeliğinde sevkiyat",
      "Yerli tohumlardan geleneksel lezzet"
    ],
    harvestTime: "İlkbahar, Yaz ve Sonbahar Dönemleri",
    packagingTypes: ["Özel Havalandırmalı Kasa / Koli (5 Kg - 10 Kg)"],
    storageTips: "Tazeliğini korumak için serin ortamda muhafaza ediniz.",
    images: [
      "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1519996529931-28324d5a630e?auto=format&fit=crop&w=1000&q=80"
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
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=1000&q=80"
    ],
    isFeatured: false,
    orderNotes: "Kiler ürünlerimiz sınırlı miktarda hazırlanmaktadır. Lütfen telefonla stok sorunuz."
  }
];
