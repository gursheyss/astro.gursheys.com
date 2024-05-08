import type { APIRoute } from "astro";
import { getNowPlaying } from "../../lib/spotify";

export const GET: APIRoute = async () => {
  const nowPlaying = await getNowPlaying();

  return new Response(JSON.stringify(nowPlaying), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
