export default async function handler(req, res) {
  const { id } = req.query;

  const targetUrl = `https://livetvbox.live/live/Gareth/Gareth123/${id}.ts`;

  try {
    const stream = await fetch(targetUrl, {
      headers: {
        'User-Agent': 'VLC/3.0.16',
        'Referer': 'https://livetvbox.live/',
      }
    });

    if (!stream.ok) {
      return res.status(stream.status).send(`Error: ${stream.statusText}`);
    }

    res.setHeader('Content-Type', 'video/MP2T');
    stream.body.pipe(res);
  } catch (e) {
    res.status(500).send('Proxy error');
  }
}
