import { combineReducers } from "redux";
import { searchNewsReducer } from "./searchNewsReducer";
import headlinesReducer from "./headLinesReducer";

export const reducer = combineReducers({
  searchNewsReducer,
  headlinesReducer,
});
export default reducer;
