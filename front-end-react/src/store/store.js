import reduxthunk from "redux-thunk";
import { createStore, applyMiddleware, combineReducers } from "redux";
import reservationReducer from "./reducers/reservation";
import otelReducer from "./reducers/otel";

const rootReducer = combineReducers({
  reservation: reservationReducer,
  otel: otelReducer,
});

const store = createStore(rootReducer, applyMiddleware(reduxthunk));

export default store;
