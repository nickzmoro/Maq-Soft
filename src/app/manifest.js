export default function manifest() {
  return {
    name: "Maq Soft Sorvetes",
    short_name: "Maq Soft",
    description:
      "A melhor sorveteria de Bauru, com diversas opções de sorvetes artesanais e expressos.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#406381",
    icons: [
      {
        src: "/images/logo.webp",
        sizes: "192x192",
        type: "image/webp",
      },
      {
        src: "/images/logo.webp",
        sizes: "512x512",
        type: "image/webp",
      },
    ],
  };
}
