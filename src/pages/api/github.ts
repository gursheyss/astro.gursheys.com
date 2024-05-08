import type { APIRoute } from "astro";
import { formatDistanceToNow } from "date-fns";
const maxAge = 3600;

const GITHUB_PERSONAL_ACCESS_TOKEN = import.meta.env
  .GITHUB_PERSONAL_ACCESS_TOKEN;

export const GET: APIRoute = async () => {
  const response = await fetch(
    "https://api.github.com/repos/gursheyss/astro.gursheys.com",
    {
      headers: {
        Authorization: `token ${GITHUB_PERSONAL_ACCESS_TOKEN}`,
      },
    }
  );

  const data = await response.json();
  const lastUpdated = new Date(data.pushed_at);
  const timeDifference = formatDistanceToNow(lastUpdated, { addSuffix: true });

  return new Response(
    JSON.stringify({
      lastUpdated: timeDifference,
    })
  );
};
