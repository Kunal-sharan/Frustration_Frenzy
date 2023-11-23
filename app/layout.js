import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar/Navbar";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Frustration Frenzy",
  description: "A rageroom booking website for people in need.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          <div className="overflow-hidden">{children}</div>
        </body>
      </html>
    </ClerkProvider>
  );
}
