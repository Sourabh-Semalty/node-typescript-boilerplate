import express, { Request } from "express";
const app = express();
const port = 3000;

app.get("/", (req: Request, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  return console.log(`Server is listening at http://localhost:${port}`);
});
