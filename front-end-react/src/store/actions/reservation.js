export const SET_CITY = "SET_CITY";
export const SET_DATE = "SET_DATE";
export const SET_HOST = "SET_HOST";

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
