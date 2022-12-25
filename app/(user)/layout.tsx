"use client";

import Footer from "../../components/footer";
import Header from "../../components/header";
import "../../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <Header />
        <div className="h-body-height">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
