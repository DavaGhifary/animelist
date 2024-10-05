import Navbar from "@/components/Navbar";
import { Gabarito } from "next/font/google";
import "./globals.css";

const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata = {
  title: "Anime List",
  description: "Web Anime Indonesia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${gabarito.className} bg-color-secondary`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
