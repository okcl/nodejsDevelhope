import express from "express";
import "express-async-errors";
import morgan from "morgan";
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;;

app.use(express.json());
app.use(morgan("dev"));

//data
type Planet = {
    id: number,
    name: string,
};

type Planets = Planet[];

let planets: Planets = [
  {
    id: 1,
    name: "Earth",
  },
  {
    id: 2,
    name: "Mars",
  },
];


app.get('/', (req, res) => {
  res.status(200).json({ msg: 'Hello World!' });
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});