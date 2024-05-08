import { getNowPlaying } from "../../lib/spotify";

export async function GET() {
  const nowPlaying = await getNowPlaying();
  return new Response(JSON.stringify(nowPlaying));
}
