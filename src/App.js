import React, { useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { refetch } = useQuery({
    queryKey: "people",
    queryFn: () => {
      return fetch("https://swapi.dev/api/people").then((data) => data.json());
    },
  });

  return (
    <div>
      <Link to="/some">go to some page</Link>
      <button onClick={() => refetch()}>fetch</button>
    </div>
  );
}

export default App;
