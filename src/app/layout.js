import Header from "../component/Header";
import Footer from "../component/Footer";
import Providers from "./providers";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";


export const metadata = {
  title: "Jss University",
  description: "A Next.js project with Zustand and SEO setup",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <main className="main-container">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
