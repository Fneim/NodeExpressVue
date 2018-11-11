const express = require("express");
const path = require("path");

const PORT = process.env.port || 8080;
const app = express();

app.use(express.static("/index.js"));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
