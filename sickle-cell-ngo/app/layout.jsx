import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Sickle Cell & Thalassemia Society Of Chandrapur",
  description: "Creating Awareness, Supporting Families, Saving Lives.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
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
