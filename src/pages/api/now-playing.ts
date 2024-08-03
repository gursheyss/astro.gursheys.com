import type { APIRoute } from "astro";
import { getNowPlaying } from "../../lib/spotify";

export const GET: APIRoute = async () => {
  const spotifyData = await getNowPlaying();

  return new Response(JSON.stringify(spotifyData));
};
