import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import User from "@/data/User";


const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: User.profile.name + " - " + "Portfolio",
  description: User.profile.intro,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
