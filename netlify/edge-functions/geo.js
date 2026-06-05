// Same-origin geo lookup via Netlify's edge geo. Replaces the client-side
// calls to ipapi.co / ipwho.is, which fail from the browser (CORS / 403).
export default async (_request, context) => {
  const countryCode = context?.geo?.country?.code ?? null;
  return Response.json(
    { countryCode },
    { headers: { 'cache-control': 'no-store' } }, // per-visitor — never CDN-cache
  );
};

export const config = { path: '/api/geo' };
