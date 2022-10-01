import express from "express";
import {
  getReservationById,
  saveReservation,
} from "../controllers/reservation.js";

const router = express.Router();

router.get("/getReservation/:id", getReservationById);
router.post("/reservation", saveReservation);

export default router;
