import { createReservationHandler } from "../helpers/reservation";

export const SET_CITY = "SET_CITY";
export const SET_DATE = "SET_DATE";
export const SET_HOST = "SET_HOST";
export const SET_OWNER_INFO = "SET_OWNER_INFO";
export const FETCH_RESERVATION = "FETCH_RESERVATION";
export const CREATE_RESERVATION = "CREATE_RESERVATION";

export const changeCity = (selectedCity) => {
  return async (dispatch) => {
    dispatch({ type: SET_CITY, payload: selectedCity });
  };
};
export const changeDate = (selectedDate) => {
  return async (dispatch) => {
    dispatch({ type: SET_DATE, payload: selectedDate });
  };
};

export const changeHost = (name, operation) => {
  return async (dispatch) => {
    let hostPayload = operation === "i" ? 1 : -1;
    dispatch({ type: SET_HOST, payload: { name, hostPayload } });
  };
};

export const setOwnerInfo = (ownerInfo) => {
  return async (dispatch) => {
    dispatch({ type: SET_OWNER_INFO, payload: ownerInfo });
  };
};

export const fetchReservation = () => {};

export const createReservation = (reservation) => {
  return async (dispatch) => {
    const reservationID = await createReservationHandler(reservation);
    dispatch({ type: CREATE_RESERVATION, payload: reservationID.body._id });
  };
};
