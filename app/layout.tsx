import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kaerulabs.cl"), // Cambia por tu dominio real cuando esté activo
  title: "Kaeru Labs | Desarrollo Web y Sistemas Informáticos a Medida",
  description:
    "Desarrollamos páginas web profesionales, tiendas online con integración Webpay y sistemas informáticos a medida en Chile.",
  keywords: [
    "Desarrollo Web",
    "Sistemas Informáticos",
    "Next.js",
    "Webpay",
    "Páginas Web Chile",
    "Kaeru Labs",
  ],
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Kaeru Labs | Desarrollo Web y Sistemas Informáticos",
    description:
      "Desarrollamos páginas web profesionales, tiendas online y sistemas a medida.",
    url: "https://kaerulabs.cl",
    siteName: "Kaeru Labs",
    images: [
      {
        url: "/logo-kaeru.png",
        width: 1200,
        height: 630,
        alt: "Kaeru Labs Logo",
      },
    ],
    locale: "es_CL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Kaeru Labs",
    url: "https://kaerulabs.cl",
    logo: "https://kaerulabs.cl/logo-kaeru.png",
    sameAs: ["https://wa.me/56945300403"],
  };

  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}