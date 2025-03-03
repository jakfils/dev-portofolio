import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-inter",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
});
import "./globals.css";


export const metadata: Metadata = {
  title: "Developper Portofolio",
  description:
    "A showcase of my skills, projects, and experience as a web developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
