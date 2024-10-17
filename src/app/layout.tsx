import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/common/NavBar";
import Footer from "@/components/common/Footer";
import LOGO from "../assets/logo.png";

const inter = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EECon 2024 - 4th International Conference on Electrical Engineering",
  keywords: [
    "EECon-2024",
    "EECon",
    "EECon-24",
    "EECon EESoc",
    "EECon EESoc 2024",
    "4th International Conference on Electrical Engineering",
    "conference",
    "2024 engineering conference",
    "Sri Lanka conference",
    "University of Moratuwa",
  ],
  authors: [
    { name: "EESoc", url: "https://www.eesoc.lk" },
    { name: "Janith Samee", url: "https://janithsamee.me" },
  ],
  openGraph: {
    description:
      "The 4th International Conference on Electrical Engineering (EECon2024) will be held on Thursday, December 12th, 2024 in Colombo, Sri Lanka. Organized by the Department of Electrical Engineering with EESoc, University of Moratuwa.",
    images: "https://eecon2024.eesoc.lk/logo.png",

    url: "https://eecon2024.eesoc.lk",
    type: "website",
  },

  icons: [{ rel: "icon", url: "/logo.png", type: "image/x-icon" }],
  description:
    "To share the knowledge to integrate state of the art technologies in different Engineering disciplines for the betterment of fields of Electrical Engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar></NavBar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
