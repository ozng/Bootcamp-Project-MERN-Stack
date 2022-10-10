import axios from "axios";

export const createReservationHandler = async (reservation) => {
  const { data } = await axios.post(`/reservation`, reservation);

  return data;
};

export const fetchReservationHandler = async (reservationNumber) => {
  try {
    const { data } = await axios.get(`/getReservation/${reservationNumber}`);

    return data;
  } catch (error) {
    console.log(error);
  }
};
