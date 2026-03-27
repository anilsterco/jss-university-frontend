import Header from "../component/Header";
import Footer from "../component/Footer";
import Providers from "./providers";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/roboto-condensed/300.css";
import "@fontsource/roboto-condensed/400.css";
import "@fontsource/roboto-condensed/700.css";
import "../../public/js/aos";

import ScriptLoader from "@/component/ScriptLoader";
import MainWrapper from "@/component/MainWrapper";
import HashScrollHandler from "@/component/HashScrollHandler";
import PopupModal from "@/component/PopupModal";

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
          <HashScrollHandler />
          <MainWrapper>{children}</MainWrapper>
          <ScriptLoader />
          <Footer />
        </Providers>
        <PopupModal />
      </body>
    </html>
  );
}
