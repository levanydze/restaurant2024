import { Inter, Oswald, Gabriela, Calligraffitti } from "next/font/google";
import "./globals.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-primary",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-main",
});
const gabriela = Gabriela({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-logo",
});
const caligraf = Calligraffitti({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font3",
});

export const metadata = {
  title: "ChaCha Restaurant",
  description: "Delicious Food",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${oswald.variable} ${gabriela.variable} ${inter.variable} ${caligraf.variable}`}
      >
        <main className="container">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
