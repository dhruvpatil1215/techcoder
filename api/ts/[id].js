export default async function handler(req, res) {
  const { id } = req.query;

  const base = `https://${req.headers.host}/api/ts/${id}`;

  const m3u8 = `#EXTM3U
#EXT-X-VERSION:3
#EXT-X-TARGETDURATION:10
#EXT-X-MEDIA-SEQUENCE:0
#EXTINF:10.0,
${base}
#EXT-X-ENDLIST`;

  res.setHeader('Content-Type', 'application/vnd.apple.mpegurl');
  res.send(m3u8);
}
