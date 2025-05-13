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

      {/* Page view conversion event */}
      <Script
        id="gtag-pageview"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            gtag('event', 'conversion', {
              'send_to': 'AW-17074663724/w-MuCLSdpsYaEKzi6s0_'
            });
          `,
        }}
      />

      {/* gtag_report_conversion function for manual conversion tracking */}
      <Script
        id="gtag-report-conversion"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                'send_to': 'AW-17074663724/EUE7CKbpr8YaEKzi6s0_',
                'event_callback': callback
              });
              return false;
            }
          `,
        }}
      />
    </>
  );
};

export default GoogleTagManager;
