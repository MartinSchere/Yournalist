import React, { useState, useEffect } from "react";

import NewsApi from "ts-newsapi";

import {
  INewsApiSourceParams,
  INewsApiSourcesResponse,
} from "ts-newsapi/lib/types";

const newsapi = new NewsApi("f0e3f7baeace485a9146207160db77ff");

export interface useSearchState {
  data: INewsApiSourcesResponse | null;
  loading: boolean;
  error: INewsApiSourcesResponse | null;
}
const useSourceSearch = (
  category: INewsApiSourceParams["category"]
): useSearchState => {
  const [response, setResponse] = useState<useSearchState>({
    data: null,
    loading: false,
    error: null,
  });
  useEffect(() => {
    if (category) {
      newsapi
        .getSources({
          country: "us",
          language: "en",
          category: category,
        })
        .then((data) => {
          setResponse({ data, loading: false, error: null });
        })
        .catch((e) => {
          setResponse({ data: null, loading: false, error: e });
        });
    }
  }, [category]);

  return response;
};

export default useSourceSearch;
