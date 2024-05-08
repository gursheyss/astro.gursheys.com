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

  return new Response(JSON.stringify(spotifyData));
};
