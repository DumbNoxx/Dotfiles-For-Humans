export async function onRequest(context) {
  const { request, next, env } = context;
  const url = new URL(request.url);

  console.log("Ruta detectada:", url.pathname);

  if (url.pathname.startsWith('/blog/')) {
    const segments = url.pathname.split('/').filter(Boolean);
    const postId = segments[segments.length - 1];

    const response = await env.ASSETS.fetch(new Request(url.origin + '/index.html', request));

    try {
      const apiRes = await fetch("https://nxus-api-blog.nxus-dev.workers.dev/api/getPost/one", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ PostId: postId })
      });

      if (apiRes.ok) {
        const postData = await apiRes.json();
        
        if (!postData.TitleData) return response;

        const cleanDesc = postData.Message?.replace(/<[^>]*>/g, '').substring(0, 160).trim() || "";

        return new HTMLRewriter()
          .on('title', { element(e) { e.setInnerContent(`${postData.TitleData} | Nxus`); } })
          .on('meta[property="og:title"]', { element(e) { e.setAttribute('content', postData.TitleData); } })
          .on('meta[property="og:description"]', { element(e) { e.setAttribute('content', cleanDesc); } })
          .on('meta[name="description"]', { element(e) { e.setAttribute('content', cleanDesc); } })
          .on('head', {
            element(e) {
              e.append(`<meta property="og:url" content="${url.href}">`, { html: true });
              e.append(`<meta name="twitter:card" content="summary_large_image">`, { html: true });
              e.append(``, { html: true });
            }
          })
          .transform(response);
      }
    } catch (e) {
      console.error("Error fetch API:", e);
    }
  }

  return next();
}
