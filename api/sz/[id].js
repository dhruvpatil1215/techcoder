export default async function handler(req, res) {
  const { id } = req.query;

  const username = 'Gareth';
  const password = 'Gareth123';

  const targetUrl = `https://livetvbox.live:443/live/${username}/${password}/${id}.ts`;

  try {
    const response = await fetch(targetUrl);

    if (!response.ok) {
      return res.status(500).send('❌ Failed to fetch stream');
    }

    res.setHeader('Content-Type', 'video/MP2T');
    res.setHeader('Cache-Control', 'no-store');

    const stream = response.body;
    stream.pipe(res);
  } catch (error) {
    console.error(`Fetch error: ${error}`);
    res.status(500).send('❌ Internal Server Error');
  }
}
