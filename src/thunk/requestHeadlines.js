import axios from "axios";
import { setHeadLines } from "../redux/action/index";
export const requestHeadlines = () => async (dispatch) => {
  const response = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=90e0347d57484f5487696dba4105a5ff`
  );
  dispatch(setHeadLines(response.data.articles));
};
