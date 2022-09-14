import { SET_CITY, SET_DATE, SET_HOST } from "../actions/reservation";

const initialState = {
  city: null,
  date: null,
  host: {
    cat: { value: 0 },
    dog: { value: 0 },
  },
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
        date: {
          startDate: action.payload[0]._d,
          endDate: action.payload[1]._d,
        },
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
    default:
      return {
        ...state,
      };
  }
};

export default reservationReducer;
