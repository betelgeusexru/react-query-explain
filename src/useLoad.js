import React, { useEffect, useState } from "react";

export const useLoad = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://swapi.dev/api/people")
      .then((data) => data.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
        setIsSuccess(true);
      })
      .catch((e) => {
        setError(e);
        setIsLoading(false);
      });
  }, []);

  return { data, isLoading, error, isSuccess };
};
