import express from "express";

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("The server is work");
});

app.listen(PORT, () => {
  console.log("The server run on http://localhost:" + PORT);
});
