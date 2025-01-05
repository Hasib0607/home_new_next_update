
import Head from 'next/head';
import React from 'react';

const StructuredData = () => (
  <Head>
    <script type="application/ld+json">
      {`
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "url": "https://www.ebitans.com.bd/",
          "name": "eBitans | Best eCommerce Website Builder in Bangladesh",
          "description": "Start your eCommerce journey today with the best eCommerce website builder in Bangladesh. Easy-to-use tools to design, manage, and grow your business online.",
          "publisher": {
            "@type": "Organization",
            "name": "eBitans",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.ebitans.com.bd/_next/static/media/logo-dark.2b166500.png"
            },
            "telephone": "+8801886515579",
            "sameAs": [
              "https://www.facebook.com/ebitans",
              "https://www.youtube.com/@ebitans"
            ]
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://www.ebitans.com.bd/?q={best ecommerce website builder in Bangladesh}",
            "query-input": "required name=best ecommerce website builder in Bangladesh"
          }
        }
      `}
    </script>
  </Head>
);

export default StructuredData;
