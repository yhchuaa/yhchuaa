import "./globals.css";
import React from "react";
import Header from "./components/header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className=" dark:bg-[#121212] transition-all ease-out duration-300">
        <Header />
        {children}
      </body>
    </html>
  );
}
