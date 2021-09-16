const express = require("express");
const path = require("path");

const app = express();
const publicDirectoryPath = path.join(__dirname, "../public");
const port = process.env.PORT || 3000;

app.use(express.static(publicDirectoryPath));
app.use(express.json());

app.listen(port, () => {
  console.log("Server is up on port: " + port);
});
