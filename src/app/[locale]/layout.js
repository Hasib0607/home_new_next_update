import { Archivo } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import Footer from "@/components/common/Footer";
import ScrollToTop from "@/lib/ScrollToTop";
import { AOSInit } from "./aos";
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/providers/ThemeProvider";
import { AnalyticsProvider } from "@/context/AnalyticsContext";
import { dir } from "i18next";
import i18nConfig from "../../../i18nConfig";
import { GoogleAnalytics } from "@next/third-parties/google";
import StructuredData from "@/components/StructuredData";
import FacebookPixel from "@/utils/FacebookPixel";
import GoogleTagManager from "@/utils/GoogleTagManager";
import dynamic from "next/dynamic";
const PopupWrapper = dynamic(() => import("@/components/PopupWrapper"), { ssr: false });

const archivo = Archivo({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: {
    default: "eBitans | Best eCommerce Website Builder in Bangladesh",
    template: "%s | eBitans",
  },
  keywords: [
    "e-commerce",
    "website",
    "ebitans",
    "ecommerce builder in bd",
    "ecommerce builder in bangladesh",
    "top ecommerce builder in bangladesh",
    "ecommerce site builder in bangladesh",
    "best ecommerce builder in bangladesh",
    "top ecommerce site builder in bangladesh",
    "ecommerce website builder in bangladesh",
    "ecommerce website builder",
    "top ecommerce website builder",
  ],
  description:
    "Start your eCommerce journey today with the best eCommerce website builder in Bangladesh. Easy-to-use tools to design, manage, and grow your business online",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    images:
      "https://ebitans.com/Image/ebitans-website-builder-Social-Preview-image.png",
    width: 1200,
    height: 630,
  },
};

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params: { locale } }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "eBitans",
    url: "https://www.ebitans.com.bd",
    logo: "https://www.ebitans.com.bd/_next/static/media/logo-dark.2b166500.png",
    sameAs: [
      "https://www.facebook.com/ebitans",
      "https://twitter.com/ebitans",
      "https://www.linkedin.com/company/ebitans",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+8801886515579",
      contactType: "Customer Service",
      areaServed: "BD",
      availableLanguage: ["Bangla", "English"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "House: 39, Road: 20, Nikunja 2",
      addressLocality: "Dhaka",
      addressRegion: "Dhaka",
      postalCode: "1229",
      addressCountry: "Bangladesh",
    },
    email: "info@ebitans.com",
  };

  return (
    <html lang={locale} dir={dir(locale)}>
      <head>
        <AOSInit />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <meta
          name="google-site-verification"
          content="Xs0AWKWY2yKdJjyWwwxt61arffxOHxDvaYBi2e3uKRM"
        />
        <FacebookPixel />
        <GoogleTagManager />
      </head>
      <body className={archivo.className}>
        <ScrollToTop />
        <div className="absolute top-0 left-0 bottom-0 h-full w-full lg:grid grid-cols-6 divide-x hidden">
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
          <AnalyticsProvider>
            <div className="min-h-screen">{children}</div>
            {/* <Footer locale={locale} /> */}
            </AnalyticsProvider>
          </ThemeProvider>
        </ThemeContextProvider>

        <PopupWrapper /> 
        
        {/* GTM noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NNL4WP82"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
      </body>
      <GoogleAnalytics gaId="G-R1P19DNPR8" />
    </html>
  );
}
