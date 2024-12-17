// import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";


export const metadata = {
  title: "Ecosystem participant dashboard",
  description: "Created by Platformable.com",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserProvider>
        <body>
          {children}
        </body>
      </UserProvider>
        
    </html>
  );
}
