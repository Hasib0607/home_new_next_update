import Script from "next/script";

const GoogleAnalytics = () => {
  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-17074663724"
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17074663724');
          `,
        }}
      />
    </>
  );
};

export default GoogleAnalytics;
