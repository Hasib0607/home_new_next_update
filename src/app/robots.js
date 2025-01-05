export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: '/otp-verify',
      },
      sitemap: 'https://ebitans.com.bd/sitemap.xml',
    }
  }