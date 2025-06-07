export default async function handler(req, res) {
  const { id } = req.query;

  const username = 'Gareth';
  const password = 'Gareth123';
  const targetUrl = `https://livetvbox.live:443/live/${username}/${password}/${id}.ts`;

  try {
    const response = await fetch(targetUrl, {
      headers: {
        'User-Agent': 'VLC/3.0.16',
        'Referer': 'https://livetvbox.live/',
      }
    });

    if (!response.ok) {
      return res.status(response.status).send(`❌ Failed: ${response.statusText}`);
    }

    res.setHeader('Content-Type', 'video/MP2T');
    res.setHeader('Cache-Control', 'no-store');

    response.body.pipe(res);
  } catch (error) {
    console.error(`Fetch error: ${error}`);
    res.status(500).send('❌ Internal Server Error');
  }
}
