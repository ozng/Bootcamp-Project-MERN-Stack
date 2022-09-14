import { SET_SELECTED_OTEL, SET_FILTERED_OTELS } from "../actions/otel";
import { otelData } from "../../dummy-data/OtelData";

const initialState = {
  selectedOtel: null,
  filteredOtels: [],
};

const otelReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_OTEL:
      return {
        ...state,
        selectedOtel: action.payload,
      };
    case SET_FILTERED_OTELS:
      return {
        ...state,
        filteredOtels: otelData.filter((otel) => otel.city === action.payload),
      };
    default:
      return {
        ...state,
      };
  }
};

export default otelReducer;
