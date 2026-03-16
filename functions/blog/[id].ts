export async function onRequest(context) {
  const { request, params, env } = context;
  const url = new URL(request.url);
  const postId = params.id;

  const response = await context.next();;

  try {
    const apiRes = await fetch("https://nxus-api-blog.nxus-dev.workers.dev/api/getPost/one", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ PostId: postId })
    });

    if (!apiRes.ok) return response;

    const postData = await apiRes.json();
    const cleanDescription = postData.Message
      .replace(/<[^>]*>/g, '')
      .substring(0, 160)
      .trim();

    return new HTMLRewriter()
      .on('title', {
        element(e) {
          e.setInnerContent(`${postData.TitleData} | Nxus`);
        }
      })
      .on('head', {
        element(e) {
          e.append(`<meta property="og:title" content="${postData.TitleData}">`, { html: true });
          e.append(`<meta property="og:description" content="${cleanDescription}">`, { html: true });
          e.append(`<meta property="og:url" content="${url.href}">`, { html: true });
          e.append(`<meta property="og:type" content="article">`, { html: true });
          e.append(`<meta name="description" content="${cleanDescription}">`, { html: true });
          e.append(`<meta name="twitter:card" content="summary_large_image">`, { html: true });
          e.append(`<meta name="twitter:title" content="${postData.TitleData}">`, { html: true });
        }
      })
      .transform(response);

  } catch (err) {
    return response;
  }
}
