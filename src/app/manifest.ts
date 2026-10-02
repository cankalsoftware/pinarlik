import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Pınarlık Doğal Gıda Ürünleri",
    short_name: "Pınarlık Gıda",
    description: "Denizli Pınarlık'tan Chetner cinsi yerli doğal ceviz, kelebek iç ceviz, güneşte kurutulmuş doğal erik ve saf bal.",
    start_url: "/",
    display: "standalone",
    background_color: "#fbf9f5",
    theme_color: "#1b4332",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
