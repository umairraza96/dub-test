import axios, { AxiosRequestConfig, AxiosRequestHeaders } from "axios";

interface IHTTP {
  method: "GET" | "POST" | "PUT" | "DELETE";
  url: string;
  data?: any;
  headers?: AxiosRequestHeaders;
}

export function HTTP<T>({ method, url, data, headers }: IHTTP) {
  const axiosConfig: AxiosRequestConfig = {
    baseURL: "https://newsapi.org/v2/everything",
  };

  return axios<T>({
    ...axiosConfig,
    method,
    url,
    data,
    headers: {
      ...headers,
      "X-Api-Key": process.env.REACT_APP_NEWS_API_KEY,
    },
  });
}
