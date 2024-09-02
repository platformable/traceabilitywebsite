import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: 'swap', weight: '400', variable: '' });

export const metadata = {
  title: "Ecosystem participant dashboard",
  description: "Created by Platformable.com",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
