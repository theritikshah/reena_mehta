import "./globals.css";
import styles from "./page.module.scss";
import Header from "@/components/Header";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { Crimson_Text, Great_Vibes } from "next/font/google";

export const metadata: Metadata = {
  title: "Reena Mehta",
  description: `I am Reena Mehta, an Indian vocalist embarking on a profound musical odyssey. Raised in the heartland of India, I discovered my musical identity within the rich tapestry of classical Indian ragas. Yet, my artistic vision knows no bounds, as I delve into a multifarious array of musical genres, harmoniously weaving together melodies that narrate the intricate stories of life's myriad vicissitudes.`,
};

// const crimsonText = Crimson_Text({style:"normal"})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={styles.body}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
