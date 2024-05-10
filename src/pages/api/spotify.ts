import type { APIRoute } from "astro";
import { getNowPlaying, getPlaylists, getTopSongs } from "../../lib/spotify";

export const GET: APIRoute = async () => {
  const [nowPlaying, playlists, topSongs] = await Promise.all([
    getNowPlaying(),
    getPlaylists(),
    getTopSongs(),
  ]);

  const spotifyData = {
    nowPlaying,
    playlists,
    topSongs,
  };

  return new Response(JSON.stringify(spotifyData));
};
