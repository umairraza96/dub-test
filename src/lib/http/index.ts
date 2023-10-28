import axios, { AxiosRequestHeaders } from "axios";

interface IHTTP {
  method: "GET" | "POST" | "PUT" | "DELETE";
  url: string;
  data?: any;
  headers?: AxiosRequestHeaders;
}

export function HTTP({ method, url, data, headers }: IHTTP) {
  return axios({
    method,
    url,
    data,
    headers,
  });
}
