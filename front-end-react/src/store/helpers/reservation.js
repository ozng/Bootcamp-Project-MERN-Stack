import axios from "axios";

export const createReservationHandler = async (reservation) => {
  const { data } = await axios.post(`/reservation`, reservation);

  return data;
};
