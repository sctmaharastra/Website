import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL("https://www.sctsmaharashtra.in"),
  title: {
    default: "Sickle Cell & Thalassemia Society Of Chandrapur, Maharashtra",
    template: "%s | SCTS Chandrapur",
  },
  description:
    "Sickle Cell & Thalassemia Society Of Chandrapur, Maharashtra works for awareness, screening, counseling, education, patient support, and prevention of genetic blood disorders.",
  keywords: [
    "Sickle Cell NGO Chandrapur",
    "Thalassemia NGO Chandrapur",
    "Sickle Cell Society Maharashtra",
    "Thalassemia Society Maharashtra",
    "Sickle Cell awareness Chandrapur",
    "Sickle Cell screening Maharashtra",
    "blood disorder NGO Chandrapur",
    "NGO in Chandrapur Maharashtra",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sickle Cell & Thalassemia Society Of Chandrapur",
    description:
      "Creating Awareness, Supporting Families, Saving Lives. Join us for awareness, screening, counseling, and support for Sickle Cell Disease and Thalassemia.",
    url: "https://www.sctsmaharashtra.in",
    siteName: "SCTS Chandrapur",
    images: [
      {
        url: "/hero2.png",
        width: 1050,
        height: 775,
        alt: "Sickle Cell & Thalassemia Society Of Chandrapur, Maharashtra",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sickle Cell & Thalassemia Society Of Chandrapur",
    description:
      "Creating Awareness, Supporting Families, Saving Lives. Awareness, screening, counseling, and support for genetic blood disorders.",
    images: ["/hero2.png"],
  },

  alternates: {
    canonical: "https://www.sctsmaharashtra.in",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: "Sickle Cell & Thalassemia Society Of Chandrapur, Maharashtra",
    alternateName: "SCTS Chandrapur",
    url: "https://www.sctsmaharashtra.in",
    logo: "https://www.sctsmaharashtra.in/logo.png",
    email: "sicklecellsocietyofchanda@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chandrapur",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    areaServed: ["Chandrapur", "Maharashtra", "India"],
    keywords:
      "Sickle Cell Disease, Thalassemia, NGO in Chandrapur, Sickle Cell awareness, genetic blood disorder screening",
    sameAs: [],
  };

  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="w-full overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
