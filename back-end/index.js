import express from "express";
import cors from "cors";
import reservationRoute from "./routers/reservation.js";

const app = express();

app.use(cors());

const PORT = 8800;

app.use("/reservation", reservationRoute);

app.listen(PORT, () => {
  console.log(`Server is running at localhost:${PORT}`);
});
