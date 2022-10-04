import mongoose from "mongoose";

const reservationSchema = mongoose.Schema({
  otelID: String,
  host: Array,
  startDate: Date,
  endDate: Date,
  ownerInfo: Array,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Reservation = mongoose.model("reservation", reservationSchema);

export default Reservation;
