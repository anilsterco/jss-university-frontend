import Header from "../component/Header";
import Footer from "../component/Footer";
import Providers from "./providers";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/roboto-condensed/300.css";
import "@fontsource/roboto-condensed/400.css";
import "@fontsource/roboto-condensed/700.css";
import "../../public/js/aos";
import '../styles/custom.style.css'

import ScriptLoader from "@/component/ScriptLoader";
import MainWrapper from "@/component/MainWrapper";
import HashScrollHandler from "@/component/HashScrollHandler";

export const metadata = {
  title: "JSS University",
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
          <a
            href="https://wa.me/+919311830458"
            target="_blank"
            className="whatsapp-btn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              fill="white"
              viewBox="0 0 24 24"
            >
              <path d="M20.52 3.48A11.91 11.91 0 0 0 12.01 0C5.37 0 .02 5.35 0 11.98c0 2.11.55 4.17 1.6 5.99L0 24l6.19-1.62a11.95 11.95 0 0 0 5.82 1.49h.01c6.63 0 12-5.35 12-11.98 0-3.2-1.25-6.21-3.5-8.41zM12 21.8c-1.88 0-3.72-.5-5.33-1.45l-.38-.22-3.67.96.98-3.58-.25-.37A9.8 9.8 0 0 1 2.2 12c0-5.4 4.4-9.8 9.8-9.8 2.62 0 5.08 1.02 6.93 2.87A9.74 9.74 0 0 1 21.8 12c0 5.4-4.4 9.8-9.8 9.8zm5.4-7.33c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.28-.47-2.43-1.5-.9-.8-1.5-1.8-1.67-2.1-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.48 0 1.45 1.07 2.85 1.22 3.05.15.2 2.1 3.2 5.08 4.48.7.3 1.25.48 1.68.61.7.22 1.34.19 1.85.12.56-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
            </svg>
          </a>
        </Providers>
      </body>
    </html>
  );
}
