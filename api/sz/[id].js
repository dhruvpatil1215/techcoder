export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const id = url.pathname.split("/").pop().replace(".m3u8", "").replace(".ts", "");

    const target = `https://livetvbox.live/live/Gareth/Gareth123/${id}.ts`;

    const res = await fetch(target, {
      headers: {
        "User-Agent": "VLC/3.0.16",
        "Referer": "https://livetvbox.live/",
      }
    });

    return new Response(res.body, {
      status: res.status,
      headers: {
        "Content-Type": "video/MP2T",
        "Cache-Control": "no-store"
      }
    });
  }
};
