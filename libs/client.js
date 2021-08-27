import { createClient } from "microcms-js-sdk"

export const client = createClient({
  serviceDomain: "uhoshi",
  apiKey: process.env.API_KEY,
})
