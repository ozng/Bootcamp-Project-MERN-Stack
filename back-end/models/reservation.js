import mongoose from "mongoose";

const reservationSchema = mongoose.Schema({
  otelID: {
    required: true,
  },
  host: {
    type: Object,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Reservation = mongoose.model("reservation", reservationSchema);

export default Reservation;
