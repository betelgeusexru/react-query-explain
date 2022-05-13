import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLoad } from "./useLoad";

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

    refetchOnMount: true,
    refetchIntervalInBackground: true,
    refetchOnReconnect: true,
    refetchInterval: 5000,

    staleTime: 300000,
    retry: false,
  });

  // const { isLoading, isSuccess, data, isError } = useLoad();

  return (
    <div>
      <h1>starwars page</h1>

      <Link to="/some">go to some page</Link>

      <ToastContainer />

      <h4>heros: </h4>
      {isLoading && <h1>loading...</h1>}
      {isSuccess && data.results.map((hero) => <div>{hero.name}</div>)}
      {isError && <div>error has occured</div>}
    </div>
  );
}

export default App;
