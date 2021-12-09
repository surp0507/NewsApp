import { SET_HEADLINES } from "../constant";

const initialState = {
  headlines: [],
};

const headlinesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HEADLINES:
      return {
        headlines: action.payload,
      };
    default:
      return state;
  }
};
export default headlinesReducer;
