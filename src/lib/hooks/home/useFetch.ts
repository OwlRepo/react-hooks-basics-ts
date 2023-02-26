import { useEffect, useState } from "react";
import api from "~/core/axios/api";
import type UseFetchReturnObject from "~/lib/types/home/UseFetchReturnObject";

const useFetch = (): [UseFetchReturnObject] => {
  const [apiResponse, setApiResponse] = useState<UseFetchReturnObject>({
    fetching: false,
    data: null,
  });

  useEffect(() => {
    setApiResponse({ fetching: true, data: null });
    const delayFetch = setTimeout(() => {
      api
        .get("/todos/1")
        .then((res) => setApiResponse({ fetching: false, data: res.data }))
        .catch((err) => setApiResponse({ fetching: false, data: err }));
    }, 3000);

    return () => clearTimeout(delayFetch);
  }, []);

  return [apiResponse];
};

export default useFetch;
