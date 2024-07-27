import express from "express";
const app = express();
const port = 3000;
import cors from "cors";
import bodyParser from 'body-parser';

app.use(cors());
app.use(bodyParser.json());  //to parse returned data

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("hello jii");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
