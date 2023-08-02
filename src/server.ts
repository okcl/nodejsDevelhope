import express from "express";
import "express-async-errors";
import morgan from "morgan";
import dotenv from 'dotenv';
import { 
  getAll, 
  getOneById, 
  create, 
  updateById, 
  deleteById,
  createImage,  
} from "./controllers/planets.js";
import { logIn, signUp, logOut } from "./controllers/users.js";
import multer from "multer";
import authorize from "./authorize.js";
import "./passport.js";

const storage = multer.diskStorage({
  destination: (res, file, cb) => {
    cb(null, "./uploads")
  },
  filename: (res, file, cb) => {
    cb(null, file.originalname)
  },
})
const upload = multer({storage})

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;;

app.use(express.json());
app.use(morgan("dev"));


app.get('/api/planets', getAll);
app.get('/api/planets/:id', getOneById);
app.post("/api/planets", create);
app.put("/api/planets/:id", updateById)
app.delete("/api/planets/:id", deleteById);
app.post("/api/planets/:id/image", upload.single("image"), createImage);

app.post("/api/users/login", logIn);
app.post("/api/users/signup", signUp);
app.get("/api/users/logout", authorize, logOut);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});