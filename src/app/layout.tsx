import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";

const robotoMono = Roboto_Mono({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wildan Aridh Takhfif | Portfolio",
  description: "Showcasing my projects, skills, and experiences in web development, AI, and software engineering.",
  keywords: "Wildan Aridh Takhfif, portfolio, web development, AI, software engineering, Next.js, full-stack developer",
  icons:"public/PinoUB.jpg"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoMono.className} ${robotoMono.className} antialiased`}>{children}</body>
    </html>
  );
}
