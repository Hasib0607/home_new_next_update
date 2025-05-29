import Script from 'next/script';

const StructuredData = () => {
  return (
    <Script
      type="application/ld+json"
      id="structured-data-website"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          url: 'https://www.ebitans.com.bd/',
          name: 'eBitans | Best eCommerce Website Builder in Bangladesh',
          description:
            'Start your eCommerce journey today with the best eCommerce website builder in Bangladesh. Easy-to-use tools to design, manage, and grow your business online.',
          publisher: {
            '@type': 'Organization',
            name: 'eBitans',
            logo: {
              '@type': 'ImageObject',
              url: 'https://www.ebitans.com.bd/_next/static/media/logo-dark.2b166500.png',
            },
            telephone: '+8801886515579',
            sameAs: ['https://www.facebook.com/ebitans', 'https://www.youtube.com/@ebitans'],
          },
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://www.ebitans.com.bd/?q={best ecommerce website builder in Bangladesh}',
            'query-input': 'required name=best ecommerce website builder in Bangladesh',
          },
        }),
      }}
    />
  );
};

export default StructuredData;
