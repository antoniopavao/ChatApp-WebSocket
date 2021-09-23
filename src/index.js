const express = require("express");
const http = require("http");
const path = require("path");

const app = express();
const server = http.createServer(app);
const publicDirectoryPath = path.join(__dirname, "../public");
const port = process.env.PORT || 3000;

app.use(express.static(publicDirectoryPath));
app.use(express.json());

server.listen(port, () => {
  console.log("Server is up on port: " + port);
});
