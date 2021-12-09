import { SET_ALL_NEWS } from "../constant";
import { SET_SEARCH_VALUE } from "../constant";
import { SET_HEADLINES } from "../constant/index";

export const requestData = (payload) => {
  return {
    type: SET_ALL_NEWS,
    payload,
  };
};
export const setHeadLines = (payload) => {
  return {
    type: SET_HEADLINES,
    payload,
  };
};

export const setSearchValue = (payload) => {
  return {
    type: SET_SEARCH_VALUE,
    payload,
  };
};
