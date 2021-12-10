import axios from "axios";
import { requestData } from "../redux/action";

export const requestAllNews = (value) => async (dispatch) => {
  const response = await axios.get(
    `https://newsapi.org/v2/everything?q=${value}&apiKey=90e0347d57484f5487696dba4105a5ff`
  );
  dispatch(requestData(response.data.articles));
  console.log(response.data.articles);
};
