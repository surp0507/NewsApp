import { SET_ALL_NEWS } from "../constant";
import { SET_SEARCH_VALUE } from "../constant";
import { SET_HEADLINES } from "../constant/index";
import { SET_BOOK_MARK } from "../constant/index";
import { SET_CHECK_BOX } from "../constant";

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

export const setCheckBox = (payload) => {
  return {
    type: SET_CHECK_BOX,
    payload,
  };
};

export const setBookMark = (payload) => {
  return {
    type: SET_BOOK_MARK,
    payload,
  };
};
