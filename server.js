const path = require("path");
const express = require("express");
const expressStaticGzip = require("express-static-gzip");
const history = require("connect-history-api-fallback");

const app = express();

app.use(history());

app.use(
  expressStaticGzip(path.join(__dirname, "dist"), {
    enableBrotli: true,
    orderPreference: ["br", "gzip"],
    serveStatic: {
      cacheControl: true,
      maxAge: 31536000,
    },
  }),
);

app.use("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/index.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log("\x1b[32m%s\x1b[0m", `App running on port ${PORT}`));
