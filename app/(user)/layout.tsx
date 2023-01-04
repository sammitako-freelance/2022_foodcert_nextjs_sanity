import "../../styles/globals.css";

import dynamic from "next/dynamic";
import ScrollToTop from "../../components/ScrollToTop";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const Header = dynamic(() => import("../../components/header"), {
    ssr: false,
  });
  const Footer = dynamic(() => import("../../components/footer"), {
    ssr: false,
  });

  return (
    <html>
      <body>
        <Header />
        {/* <div className="h-body-height">{children}</div> */}
        {/* page.tsx */}
        <div>{children}</div>
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
