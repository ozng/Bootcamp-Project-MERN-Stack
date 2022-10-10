import {
  SET_CITY,
  SET_DATE,
  SET_HOST,
  SET_OWNER_INFO,
  CREATE_RESERVATION,
  FETCH_RESERVATION,
} from "../actions/reservation";
import { otelData } from "../../dummy-data/OtelData";

const initialState = {
  city: null,
  date: null,
  host: {
    cat: { value: 0 },
    dog: { value: 0 },
  },
  ownerInfo: {},
  reservationID: null,
};

const reservationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case SET_DATE:
      return {
        ...state,
        date: action.payload,
      };
    case SET_HOST:
      return {
        ...state,
        host: {
          ...state.host,
          [action.payload.name]: {
            value:
              state.host[action.payload.name].value +
              action.payload.hostPayload,
          },
        },
      };
    case SET_OWNER_INFO:
      return {
        ...state,
        ownerInfo: action.payload,
      };
    case CREATE_RESERVATION:
      return {
        ...state,
        reservationID: action.payload,
      };
    case FETCH_RESERVATION:
      const selectedHotel = otelData.find(
        (otel) => otel.id === action.payload.otelID
      );
      console.log(selectedHotel);
      return {
        ...state,
        reservationID: action.payload._id,
        city: selectedHotel.city,
        date: [
          {
            _d: action.payload.startDate,
          },
          {
            _d: action.payload.endDate,
          },
        ],
        host: {
          cat: { value: action.payload.host[0].cat },
          dog: { value: action.payload.host[0].dog },
        },
        ownerInfo: action.payload.ownerInfo[0],
      };
    default:
      return {
        ...state,
      };
  }
};

export default reservationReducer;
