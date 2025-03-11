import app from "./app";

const port = process.env.PORT || 3000
Bun.serve({
    fetch(req) {
      return new Response("Hello from bun server!");
    },
  })

  console.log("server!");