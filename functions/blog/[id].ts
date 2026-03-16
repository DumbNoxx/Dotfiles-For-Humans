export async function onRequest(context) {
  const { request, params } = context;
  const url = new URL(request.url);
  const postId = params.id;

  const newRequest = new Request(request);
  newRequest.headers.delete("if-none-match");
  newRequest.headers.delete("if-modified-since");

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

    const rewrittenResponse = new HTMLRewriter()
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
        }
      })
      .transform(response);

    const finalResponse = new Response(rewrittenResponse.body, rewrittenResponse);
    finalResponse.headers.set("Cache-Control", "no-cache, no-store, must-revalidate");
    
    return finalResponse;

  } catch (err) {
    return response;
  }
}
