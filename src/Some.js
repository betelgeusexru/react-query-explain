import React, { useState } from "react";
import { useQueryClient } from "react-query";
import { Link } from "react-router-dom";

export const Some = () => {
  const queryClient = useQueryClient();
  const queryData = queryClient.getQueryData("people");

  const [showData, setShowData] = useState(false);

  console.log("da", queryData);

  return (
    <div>
      <Link to="/">go to home page</Link>

      <br />

      <button onClick={() => setShowData((p) => !p)}>show data</button>

      <div>{!queryData ? "Нет данных" : "Данные есть"}</div>

      {Boolean(showData) &&
        Boolean(queryData) &&
        queryData.results.map((res) => {
          return <h6>{res.name}</h6>;
        })}
    </div>
  );
};
