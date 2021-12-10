import { SET_HEADLINES } from "../constant";
import { SET_CHECK_BOX } from "../constant";
import { SET_BOOK_MARK } from "../constant/index";

const bookmark=JSON.parse(localStorage.getItem("bookmark"))
const initialState = {
  headlines: [],
  checkbox: false,
  bookmark: [bookmark],
};

const headlinesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HEADLINES:
      return {
        ...state,
        headlines: action.payload,
      };
    case SET_CHECK_BOX:
      return {
        ...state,
        checkbox: action.payload,
      };
    case SET_BOOK_MARK:
      return {
        ...state,
        bookmark: action.payload,
      };
    default:
      return state;
  }
};
export default headlinesReducer;
