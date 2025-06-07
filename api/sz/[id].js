export default async function handler(req, res) {
  const { id } = req.query;
  const sourceUrl = `https://livetvbox.live/live/Gareth/Gareth123/${id}.ts`;

  try {
    const response = await fetch(sourceUrl, {
      headers: {
        'User-Agent': 'VLC/3.0.16',
        'Referer': 'https://livetvbox.live/'
      }
    });

    if (!response.ok) {
      return res.status(response.status).send(`Upstream error: ${response.statusText}`);
    }

    res.setHeader('Content-Type', 'video/mp2t');
    return response.body.pipe(res);
  } catch (err) {
    console.error('Fetch error:', err);
    return res.status(500).send('Proxy error');
  }
}
