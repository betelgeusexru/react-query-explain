import React, { useState } from "react";
import { useQueries, useQuery } from "react-query";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLoad } from "./useLoad";

const ids = [1, 2];

function App() {
  const [start, setStart] = useState(false);

  const result = useQueries(
    ids.map((id) => {
      return {
        queryFn: () =>
          fetch(`https://swapi.dev/api/planets/${id}`).then((data) =>
            data.json()
          ),
        queryKey: `planets-with-id-${id}`,
        enabled: start === true,
        cacheTime: 0,
      };
    })
  );

  return (
    <div>
      refetch{" "}
      <button onClick={() => setStart((p) => !p)}>
        click and check console
      </button>
      {start &&
        result.map((res) => {
          if (res.isSuccess) {
            return <div>{res.data.name}</div>;
          }

          if (res.isLoading) {
            return <div>loading</div>;
          }
        })}
    </div>
  );
}

export default App;
