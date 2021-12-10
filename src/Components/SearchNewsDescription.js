import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

export const SearchNewsDescription = () => {
  const news = useSelector((state) => state.searchNewsReducer.news);
  const { id } = useParams();
  return (
    <div>
      <h2 className="text-center"> News Details </h2>
      <p className="mx-3">{news[id].description}</p>
    </div>
  );
};
