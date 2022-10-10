import {
  SET_SELECTED_OTEL,
  SET_FILTERED_OTELS_BY_CITY,
  SET_FILTERED_OTELS_BY_HOST,
} from "../actions/otel";
import { otelData } from "../../dummy-data/OtelData";
import { FETCH_RESERVATION } from "../actions/reservation";

const initialState = {
  selectedOtel: null,
  filteredOtels: otelData,
};

const otelReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_OTEL:
      return {
        ...state,
        selectedOtel: action.payload,
      };
    case SET_FILTERED_OTELS_BY_CITY:
      return {
        ...state,
        filteredOtels: otelData.filter((otel) => otel.city === action.payload),
      };
    case SET_FILTERED_OTELS_BY_HOST:
      return {
        ...state,
        filteredOtels:
          action.payload === "Tüm"
            ? otelData
            : otelData.filter((otel) =>
                otel.acceptedHosts.includes(action.payload)
              ),
      };
    case FETCH_RESERVATION:
      const selectedHotel = otelData.find(
        (otel) => otel.id === action.payload.otelID
      );
      return {
        selectedOtel: selectedHotel,
      };
    default:
      return {
        ...state,
      };
  }
};

export default otelReducer;
