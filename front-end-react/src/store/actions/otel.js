export const SET_SELECTED_OTEL = "SET_SELECTED_OTEL";

export const setSelectedOtel = (otel) => {
  return async (dispatch) => {
    dispatch({ type: SET_SELECTED_OTEL, payload: otel });
  };
};
