// Country lookup via our same-origin /api/geo endpoint:
//   - prod: Netlify edge function (netlify/edge-functions/geo.js) reads edge geo
//   - dev:  Express route in server.ts (geoip-lite)
// Same-origin → no CORS, and no third-party request to fail in the console.
export const fetchGeoData = async (): Promise<string | null> => {
  try {
    const res = await fetch('/api/geo');
    if (res.ok) {
      const data = await res.json();
      if (data && data.countryCode) {
        return data.countryCode; // e.g. 'RU', 'KZ'
      }
    }
  } catch (e) {
    // Ignore — caller falls back to the default country
  }
  return null;
};
