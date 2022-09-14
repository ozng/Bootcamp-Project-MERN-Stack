import { SET_SELECTED_OTEL } from "../actions/otel";

const initialState = {
  selectedOtel: null,
};

const otelReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_OTEL:
      return {
        ...state,
        selectedOtel: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default otelReducer;
