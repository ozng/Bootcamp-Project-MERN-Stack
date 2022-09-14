export const SET_SELECTED_OTEL = "SET_SELECTED_OTEL";
export const SET_FILTERED_OTELS = "SET_FILTERED_OTELS";

export const setSelectedOtel = (otel) => {
  return async (dispatch) => {
    dispatch({ type: SET_SELECTED_OTEL, payload: otel });
  };
};

export const setFilteredOtel = (city) => {
  return async (dispatch) => {
    dispatch({ type: SET_FILTERED_OTELS, payload: city });
  };
};
