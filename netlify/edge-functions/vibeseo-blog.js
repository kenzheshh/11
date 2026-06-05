export default async (request) => {
  const incoming = new URL(request.url)
  const publicHost = request.headers.get('host')        // wabase.ai

  // тот же путь (с /blog или /_vibeseo) на наш ингест-хост
  const target = new URL(incoming.pathname + incoming.search, 'https://blog-proxy.vibeseo.dev')

  const headers = new Headers(request.headers)
  headers.delete('host')                                // рантайм сам выставит Host = blog-proxy.vibeseo.dev
  headers.set('X-Forwarded-Host', publicHost)           // ← по нему резолвится тенант

  return fetch(target, {
    method: request.method,
    headers,
    body: request.method === 'GET' || request.method === 'HEAD' ? undefined : request.body,
    redirect: 'manual',
  })
}

export const config = { path: ['/blog', '/blog/*', '/_vibeseo/*'] }
