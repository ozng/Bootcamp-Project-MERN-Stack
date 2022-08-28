import reduxthunk from "redux-thunk";
import { createStore, applyMiddleware, combineReducers } from "redux";
import reservationReducer from "./reducers/reservation";

const rootReducer = combineReducers({
  reservation: reservationReducer,
});

const store = createStore(rootReducer, applyMiddleware(reduxthunk));

export default store;
