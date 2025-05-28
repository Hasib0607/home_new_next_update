import { NextResponse } from 'next/server';
import { i18nRouter } from 'next-i18n-router';
import i18nConfig from '../i18nConfig';

export async function middleware(req) {
  // First, handle i18n routing
  const i18nResult = i18nRouter(req, i18nConfig);
  const response = i18nResult ?? NextResponse.next();

  const headersList = req.headers;

  const geo = req.geo || {
    city: '',
    country: 'BD',
    region: '',
    latitude: '',
    longitude: '',
  };

  const ip = headersList.get('x-forwarded-for') || 'Unknown IP';
  const previousUrl = headersList.get('referer') || '';

  const protocol = req.nextUrl.protocol;
  const host = headersList.get('host') || req.nextUrl.host;
  const pathname = req.nextUrl.pathname;
  const search = req.nextUrl.search;
  const currentUrl = `${protocol}//${host}${pathname}${search}`;

  const skipTracking =
    ['/api/', '/_next/', '/favicon.ico', '/static/', '/images/', '/assets/'].some((path) =>
      pathname.startsWith(path)
    ) || previousUrl === currentUrl;

  if (skipTracking) {
    return response;
  }

  // 🛠️ Instead of cookies(), manually set Set-Cookie headers
  setCookie(response, 'previousUrl', previousUrl);
  setCookie(response, 'currentUrl', currentUrl);
  setCookie(response, 'currentIp', ip);

  storeGeoData(geo, response);
  catchRouteParams(pathname, response);

  return response;
}

// Config matcher
export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico|images|assets|.*\\..*).*)',
};

// Helpers
function catchRouteParams(pathname, response) {
  const segments = pathname.split('/').filter(Boolean);
  const params = {};

  if (segments[0] === 'product' && segments.length >= 3) {
    params.productId = segments[1];
    params.slug = segments[2];
  } else {
    params.productId = '';
    params.slug = '';
  }

  if (segments[0] === 'category' && segments.length >= 2) {
    params.cat_id = segments[1];
  } else {
    params.cat_id = '';
  }

  if (Object.keys(params).length > 0) {
    setCookie(response, 'routeParams', JSON.stringify(params));
  }
}

function storeGeoData(geo, response) {
  const city = geo?.city || '';
  const country = geo?.country || '';
  const region = geo?.region || '';
  const latitude = geo?.latitude || '';
  const longitude = geo?.longitude || '';

  setCookie(response, 'city', city, false);
  setCookie(response, 'countryCode', country, false);
  setCookie(response, 'region', region, false);
  setCookie(response, 'latitude', latitude, false);
  setCookie(response, 'longitude', longitude, false);
}

function setCookie(response, name, value, httpOnly = true) {
  const cookie = `${name}=${encodeURIComponent(value)}; Path=/; Max-Age=${60 * 10}; SameSite=Strict; ${httpOnly ? 'HttpOnly;' : ''}`;

  response.headers.append('Set-Cookie', cookie);
}

// import { i18nRouter } from 'next-i18n-router';
// import i18nConfig from '../i18nConfig';

// export function middleware(request) {
//   return i18nRouter(request, i18nConfig);
// }

// // applies this middleware only to files in the app directory
// export const config = {
//   matcher: '/((?!api|static|.*\\..*|_next).*)',
// };
