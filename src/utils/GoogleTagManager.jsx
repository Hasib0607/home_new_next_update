import Script from "next/script";

const GoogleTagManager = () => {
  return (
    <>
      {/* Google tag (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-17074663724"
        strategy="afterInteractive"
      />
      <Script
        id="gtag-init"
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

      {/* Event snippet for Page view conversion */}
      <Script
        id="gtag-conversion"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            gtag('event', 'conversion', {
              'send_to': 'AW-17074663724/w-MuCLSdpsYaEKzi6s0_'
            });
          `,
        }}
      />
    </>
  );
};

export default GoogleTagManager;
