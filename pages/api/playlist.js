const channels = [
  {
    id: '110055',
    name: 'PK | AAJ ENTERTAINMENT',
    logo: 'https://www.lyngsat.com/logo/tv/aa/aaj_entertainment_pk.png',
    group: 'PAKISTAN ➾ DRAMA',
  },
  {
    id: '110058',
    name: 'PK | HUM SITARY',
    logo: 'https://www.lyngsat.com/logo/tv/hh/hum-sitaray-pk.png',
    group: 'PAKISTAN ➾ DRAMA',
  },
  {
    id: '110040',
    name: 'PB: PTC SIMRAN',
    logo: 'https://i.ibb.co/WsTHSsx/download-28.png',
    group: '⭐ SHARE🗣️PUNJABI',
  }
  // 👉 Add more channels here
];

export default function handler(req, res) {
  const baseUrl = req.headers.host; // Will auto-detect your domain

  let m3u = '#EXTM3U\n\n';

  channels.forEach((ch) => {
    m3u += `#EXTINF:-1 tvg-id="" tvg-name="${ch.name}" tvg-logo="${ch.logo}" group-title="${ch.group}",${ch.name}\n`;
    m3u += `https://${baseUrl}/api/Sz/${ch.id}.m3u8\n\n`;
  });

  res.setHeader('Content-Type', 'application/vnd.apple.mpegurl');
  res.status(200).send(m3u);
}
