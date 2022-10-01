import mongoose from "mongoose";

const reservationSchema = mongoose.Schema({
  otelID: String,
  host: Array,
  startDate: Date,
  endDate: Date,
  createdAt: {
    type: Date,
    default: new Date(),
  },
  price: Number,
});

const Reservation = mongoose.model("reservation", reservationSchema);

export default Reservation;
