import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import reservationRoute from "./routers/reservation.js";

dotenv.config();

const MONGODBURL = process.env.MONGO_DB_URL;

const PORT = 8800;

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

mongoose.connect(
  MONGODBURL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log("Connected To MongoDB")
);

app.use("/reservation", reservationRoute);

app.listen(PORT, () => {
  console.log(`Server is running at localhost:${PORT}`);
});
