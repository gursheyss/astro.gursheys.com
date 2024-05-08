import type { APIRoute } from "astro";
import { getPlaylists, getTopSongs } from "../../lib/spotify";

export const GET: APIRoute = async () => {
  const [playlists, topSongs] = await Promise.all([
    getPlaylists(),
    getTopSongs(),
  ]);

  const spotifyData = {
    playlists,
    topSongs,
  };

  const maxAge = 3600;

  return new Response(JSON.stringify(spotifyData), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": `public, max-age=${maxAge}, s-maxage=${maxAge}, stale-while-revalidate`,
    },
  });
};
