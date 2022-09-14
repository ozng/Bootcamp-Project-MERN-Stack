export const SET_SELECTED_OTEL = "SET_SELECTED_OTEL";
export const SET_FILTERED_OTELS_BY_CITY = "SET_FILTERED_OTELS_BY_CITY";
export const SET_FILTERED_OTELS_BY_HOST = "SET_FILTERED_OTELS_BY_HOST";

export const setSelectedOtel = (otel) => {
  return async (dispatch) => {
    dispatch({ type: SET_SELECTED_OTEL, payload: otel });
  };
};

export const setFilteredOtelByCity = (city) => {
  return async (dispatch) => {
    dispatch({ type: SET_FILTERED_OTELS_BY_CITY, payload: city });
  };
};

export const setFilteredOtelByHost = (host) => {
  return async (dispatch) => {
    dispatch({ type: SET_FILTERED_OTELS_BY_HOST, payload: host });
  };
};
