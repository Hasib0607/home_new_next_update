import { Archivo } from "next/font/google";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./globals.css";
import Footer from "@/components/common/Footer";
import ScrollToTop from "@/lib/ScrollToTop";
import { AOSInit } from "./aos";
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/providers/ThemeProvider";
import { dir } from "i18next";
import i18nConfig from "../../../i18nConfig";
import { GoogleAnalytics } from '@next/third-parties/google'
import StructuredData from "@/components/StructuredData";

const archivo = Archivo({ subsets: ["latin"], display: 'swap' });




export const metadata = {
  
  title: {
    default: "eBitans | Best eCommerce Website Builder in Bangladesh",
    template: "%s | eBitans"
  },
  keywords: ['e-commerce', 'website', 'ebitans', 'ecommerce builder in bd', 'ecommerce builder in bangladesh', 'top ecommerce builder in bangladesh', 'ecommerce site builder in bangladesh', 'best ecommerce builder in bangladesh', 'top ecommerce site builder in bangladesh', 'ecommerce website builder in bangladesh', 'ecommerce website builder', 'top ecommerce website builder'],
  description: "Start your eCommerce journey today with the best eCommerce website builder in Bangladesh. Easy-to-use tools to design, manage, and grow your business online",
  twitter: {
    card: "summary_large_image"
  },
  openGraph: {
    images: 'https://ebitans.com/Image/ebitans-website-builder-Social-Preview-image.png',
    width: 1200,
    height: 630,
  },
};

export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ locale }));
}


export default async function RootLayout({ children, params: { locale } }) {

  return (
    <html lang={locale} dir={dir(locale)}>
      <AOSInit />

      <body className={archivo.className}>
        <ScrollToTop />
        <div className='absolute top-0 left-0 bottom-0 h-full w-full lg:grid grid-cols-6 divide-x hidden'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ToastContainer position="top-right" newestOnTop />
        <StructuredData />
        <ThemeContextProvider>
          <ThemeProvider>
            <div className="min-h-screen">{children}</div>
            <Footer locale={locale} />
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
      <GoogleAnalytics gaId="G-R1P19DNPR8" />
      <meta name="google-site-verification" content="Xs0AWKWY2yKdJjyWwwxt61arffxOHxDvaYBi2e3uKRM" />
    </html>
  );
}
