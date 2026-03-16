export async function onRequest(context) {
  const { request, params } = context;
  const url = new URL(request.url);
  const postId = params.id;

  const newRequest = new Request(request);
  newRequest.headers.delete("if-none-match");
  
  const response = await context.next(newRequest);
  if (response.status !== 200) return response;

  try {
    const apiRes = await fetch("https://nxus-api-blog.nxus-dev.workers.dev/api/getPost/one", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ PostId: postId })
    });

    if (!apiRes.ok) return response;
    const postData = await apiRes.json();
    
    const cleanDescription = postData.Message
      ?.replace(/<[^>]*>/g, '')
      .substring(0, 160)
      .trim() || "";

    return new HTMLRewriter()
      .on('title', {
        element(e) { e.setInnerContent(`${postData.TitleData} | Nxus`); }
      })
      .on('meta[name="description"]', {
        element(e) { e.setAttribute('content', cleanDescription); }
      })
      .on('meta[property="og:title"]', {
        element(e) { e.setAttribute('content', postData.TitleData); }
      })
      .on('meta[property="og:description"]', {
        element(e) { e.setAttribute('content', cleanDescription); }
      })
      .on('meta[property="og:url"]', {
        element(e) { e.setAttribute('content', url.href); }
      })
      .on('head', {
        element(e) {
          e.append(`<meta name="twitter:title" content="${postData.TitleData}">`, { html: true });
          e.append(`<meta name="twitter:card" content="summary_large_image">`, { html: true });
        }
      })
      .transform(response);

  } catch (err) {
    return response;
  }
}
