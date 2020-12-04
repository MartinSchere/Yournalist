import React, { useState, useEffect } from "react";

import NewsApi from "ts-newsapi";

import { INewsApiResponse } from "ts-newsapi/lib/types";

const newsapi = new NewsApi("f0e3f7baeace485a9146207160db77ff");

export interface useSearchState {
  data: INewsApiResponse | null;
  loading: boolean;
  error: INewsApiResponse | null;
}

const useSearch = (query: string | null, sources: string[]) => {
  const [response, setResponse] = useState<useSearchState>({
    data: null,
    loading: false,
    error: null,
  });

  useEffect(() => {
    if (query) {
      setResponse({ data: null, error: null, loading: true });
      newsapi
        .getEverything({
          q: query,
          pageSize: 1,
          sources: sources,
        })
        .then((data) => {
          setResponse({ data, loading: false, error: null });
        })
        .catch((e) => {
          setResponse({ data: null, loading: false, error: e });
        });
    }
  }, [query, ...sources]);

  return response;
};

export default useSearch;
