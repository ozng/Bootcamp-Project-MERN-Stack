import Reservation from "../models/reservation.js";

export const getReservationById = async (req, res) => {
  const id = req.params.id;
  if (id) {
    try {
      const getReservation = await Reservation.findById(id);
      res.status(200).json(getReservation);
    } catch (err) {
      res.status(500).json({
        message: "Reservation is not found",
        error: err,
      });
    }
  } else {
    res.status(500).json({
      message: "Reservation is not found",
    });
  }
};

export const saveReservation = async (req, res) => {
  if (req.body) {
    const reservationDetail = req.body;

    const newReservation = new Reservation(reservationDetail);

    try {
      await newReservation.save();
      res.status(200).json({
        message: "Reservation is saved",
        body: newReservation,
      });
    } catch (err) {
      res.status(500).json({
        message: "Reservation is not saved",
        error: err,
      });
    }
  } else {
    res.status(404).json({
      errorMessage: "Reservation cannot be saved",
    });
  }
};
