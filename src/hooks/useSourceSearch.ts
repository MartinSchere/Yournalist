import React, { useState, useEffect } from "react";

import NewsApi from "ts-newsapi";

import {
  INewsApiSourceParams,
  INewsApiSourcesResponse,
} from "ts-newsapi/lib/types";

const newsapi = new NewsApi("f0e3f7baeace485a9146207160db77ff");

const useSourceSearch = (category: INewsApiSourceParams["category"]) => {
  const [response, setResponse] = useState<null | INewsApiSourcesResponse>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    newsapi
      .getSources({
        country: "us",
        language: "en",
        category: category,
      })
      .then((res) => {
        setResponse(res);
      })
      .catch((e) => {
        setError(e);
      })
      .finally(() => setLoading(false));
  }, [category]);

  return {
    loading,
    error,
    data: response,
  };
};

export default useSourceSearch;
