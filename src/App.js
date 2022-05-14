import React from "react";
import { useQuery } from "react-query";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { isLoading, isSuccess, data, isError } = useQuery({
    queryKey: "super-heros",
    queryFn: () => {
      // return fetch("https://swapi/api/people").then((data) => data.json());
      return fetch("https://swapi.dev/api/people").then((data) => data.json());
    },
    onSuccess: () => {
      const notify = () => toast.success("all data is fechted");
      notify();
    },
    onError: () => {
      const notify = () => toast.error("server is down");
      notify();
    },

    retry: false,
  });

  return (
    <div>
      <h1>starwars page</h1>

      <ToastContainer />

      <h4>heros: </h4>
      {isLoading && <h1>loading...</h1>}
      {isSuccess && data.results.map((hero) => <div>{hero.name}</div>)}
      {isError && <div>error has occured</div>}
    </div>
  );
}

export default App;
