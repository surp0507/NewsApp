import { SET_ALL_NEWS } from "../constant";
import { SET_SEARCH_VALUE } from "../constant";

const initialState = {
  news: [],
  search: "",
};

export const searchNewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_NEWS:
      return {
        ...state,
        news: action.payload,
      };
    case SET_SEARCH_VALUE:
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
};
