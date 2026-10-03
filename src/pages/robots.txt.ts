import type { APIRoute } from "astro";
import { localUrl } from "../config/site";

export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL(localUrl("sitemap.xml"), site);
  return new Response(`User-agent: *\nAllow: /\nSitemap: ${sitemap}\n`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
