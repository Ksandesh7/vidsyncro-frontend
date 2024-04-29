import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "https://dzwh46h2zf.execute-api.us-east-2.amazonaws.com/Prod",
});
