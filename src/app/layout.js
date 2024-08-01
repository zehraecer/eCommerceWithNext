import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <div className="container">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
