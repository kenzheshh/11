export const config = { runtime: 'edge' }

export default async function handler(request) {
  const incoming = new URL(request.url)
  const path = incoming.searchParams.get('proxyPath') || ''
  incoming.searchParams.delete('proxyPath')
  if (!/^(blog|_vibeseo)(\/|$)/.test(path)) return new Response(null, { status: 404 })
  const upstream = new URL('https://blog-proxy.vibeseo.dev')
  upstream.pathname = '/' + path
  upstream.search = incoming.search
  const headers = new Headers(request.headers)
  headers.delete('host')
  headers.set('X-Forwarded-Host', 'wabase.ai')
  return fetch(upstream, { method: request.method, headers, body: request.body, redirect: 'manual' })
}
