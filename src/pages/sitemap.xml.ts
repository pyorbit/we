import type { APIRoute } from "astro";
import { localUrl } from "../config/site";

export const GET: APIRoute = ({ site }) => {
  const homepage = new URL(localUrl(), site);
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${homepage}</loc></url></urlset>`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } },
  );
};
