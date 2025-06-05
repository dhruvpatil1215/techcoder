export default async function handler(req, res) {
  const { id } = req.query;

  const streamUrl = `http://filex.tv:8080/@singh_tesla_7207492/puWnhEGsXpK3/${id}`;

  try {
    const response = await fetch(streamUrl);

    if (!response.ok) {
      return res.status(404).send("Channel not found");
    }

    const data = await response.text();

    res.setHeader("Content-Type", "application/vnd.apple.mpegurl");
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send("Error loading stream");
  }
}
