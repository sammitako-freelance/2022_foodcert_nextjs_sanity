import Footer from "../../../../components/footer";
import Header from "../../../../components/header";
import "../../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <Header />
      <body>{children}</body>
      <Footer />
    </html>
  );
}
