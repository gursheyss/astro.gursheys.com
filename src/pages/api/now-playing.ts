export const prerender = false;
import { getNowPlaying } from "../../lib/spotify";

export async function GET() {
  const nowPlaying = await getNowPlaying();

  const cacheControl = "public, max-age=15";

  return new Response(JSON.stringify(nowPlaying), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": cacheControl,
    },
  });
}
