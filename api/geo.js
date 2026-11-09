export default function handler(request, response) {
  response.setHeader('Cache-Control', 'no-store')
  response.json({ countryCode: request.headers['x-vercel-ip-country'] || null })
}
