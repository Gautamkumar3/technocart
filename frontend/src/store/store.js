import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { partnerReducer } from "./Partner/partner.reducer";

const rootReducer = combineReducers({
  partner: partnerReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
