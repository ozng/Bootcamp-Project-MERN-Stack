import {
  SET_CITY,
  SET_DATE,
  SET_HOST,
  SET_OWNER_INFO,
  CREATE_RESERVATION,
} from "../actions/reservation";

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
    default:
      return {
        ...state,
      };
  }
};

export default reservationReducer;
