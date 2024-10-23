import type { APIRoute } from "astro"
import { artists } from "../../services/data"

export const GET: APIRoute = () => {
  return new Response(JSON.stringify(artists), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  })
}
