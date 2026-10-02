import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Pınarlık Doğal Gıda Ürünleri",
    short_name: "Pınarlık Gıda",
    description: "Denizli Pınarlık'tan yerli doğal ceviz, kelebek iç ceviz, kükürtsüz güneşte kurutulmuş erik ve doğal bal.",
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
