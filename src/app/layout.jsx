import { Inter } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";
import Providers from "@/components/Providers";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.maqsoftbauru.com.br"),
  title: {
    default: "Maq Soft Sorvetes | Sabores Exclusivos desde 2009 em Bauru-SP",
    template: "%s | Maq Soft Sorvetes",
  },
  description:
    "Sorvetes deliciosos, sabores únicos, preços acessíveis e um atendimento acolhedor desde 2009. Conheça a Maq Soft em Bauru-SP!",
  keywords: [
    "sorveteria",
    "sorvete",
    "sorvete de bauru",
    "picolé",
    "potes de sorvete",
    "maq soft",
    "doceria bauru",
    "sorveteria perto de mim",
  ],
  authors: [{ name: "Nicolas Moro Ruiz" }, { name: "Maq Soft Sorvetes" }],
  creator: "Nicolas Moro Ruiz",
  publisher: "Maq Soft Sorvetes",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.maqsoftbauru.com.br",
    title: "Maq Soft Sorvetes | Sabores Exclusivos desde 2009 em Bauru-SP",
    description:
      "Sorvetes deliciosos, sabores únicos, preços acessíveis e um atendimento acolhedor desde 2009. Conheça a Maq Soft em Bauru-SP!",
    siteName: "Maq Soft Sorvetes",
    images: [
      {
        url: "/images/logo.webp",
        width: 400,
        height: 400,
        alt: "Logo Maq Soft Sorvetes",
      },
    ],
  },
  icons: {
    icon: "/images/logo.webp",
    shortcut: "/images/logo.webp",
    apple: "/images/logo.webp",
  },
};

export const viewport = {
  themeColor: "#406381",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "IceCreamShop",
    "@id": "https://www.maqsoftbauru.com.br",
    name: "Maq Soft Sorvetes",
    alternateName: "Maq Soft",
    url: "https://www.maqsoftbauru.com.br",
    logo: "https://www.maqsoftbauru.com.br/images/logo.webp",
    image: "https://www.maqsoftbauru.com.br/images/logo.webp",
    description:
      "Sorvetes deliciosos, sabores únicos, preços acessíveis e um atendimento acolhedor desde 2009 em Bauru-SP.",
    telephone: "+5514991478183",
    priceRange: "$",
    servesCuisine: ["Sorvetes", "Sobremesas", "Picolés", "Doces"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. Investigador Valdemir Nunes Medeiros, 2-16",
      addressLocality: "Bauru",
      addressRegion: "SP",
      postalCode: "17024-820",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -22.3035855,
      longitude: -49.0566391,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "13:30",
        closes: "22:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday"],
        opens: "14:30",
        closes: "22:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/maq.soft/",
      "https://www.facebook.com/profile.php?id=100063545444727",
    ],
  };

  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
