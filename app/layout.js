import { Aleo } from "next/font/google";
import "./globals.css";
//import header / footer
import { Header } from "../src/Header/Header.jsx";
import { Footer } from "../src/Footer/Footer.jsx";

const aleo = Aleo({ subsets: ["latin"] });

export const metadata = {
  title: "🔥 Fireplace Palace",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={aleo.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
