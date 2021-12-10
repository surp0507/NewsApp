import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function HeadlinesDescription() {
  const { id } = useParams();
  const headlines = useSelector((state) => state.headlinesReducer.headlines);

  return (
    <div>
      <h2 className="text-center"> News Details </h2>
      <ul className="list-group">
        <img src={headlines[id].urlToImage} alt="" className="text-center" style={{maxWidth:"50%"}}/>
        <li>{headlines[id].description}</li>
      </ul>
    </div>
  );
}
