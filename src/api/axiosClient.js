import axios from "axios";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
export const axiosClient = axios.create({
  baseURL: "http://127.0.0.1:3000/",
  withCredentials: true,
  // headers: {
  //   Authorization:
  //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5pc2hhbnQuemF2ZXJpMjJAc3BpdC5hYy5pbiIsInBhc3N3b3JkIjoibnpAMTIzIiwidXNlcm5hbWUiOiJOaXNoYW50IFphdmVyaSIsInByb2plY3RzIjpbXSwiZWRpdG9yX2FjY2VzcyI6W10sInZlcmlmaWVkIjpmYWxzZSwiX2lkIjoiNjYzN2I3ZDFiMzU0NmQ0ZTA3ODZlZjNkIiwiX192IjowLCJpYXQiOjE3MTQ5Mjc1NjksImV4cCI6MTcxNDk2MzU2OX0.o-yEb_xEJAGhETjF96SFsP0zsHjOzr59YlPItcKVpYg",

  //   Cookie:
  //     "user=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5pc2hhbnQuemF2ZXJpMjJAc3BpdC5hYy5pbiIsInBhc3N3b3JkIjoibnpAMTIzIiwidXNlcm5hbWUiOiJOaXNoYW50IFphdmVyaSIsInByb2plY3RzIjpbXSwiZWRpdG9yX2FjY2VzcyI6W10sInZlcmlmaWVkIjpmYWxzZSwiX2lkIjoiNjYzN2I3ZDFiMzU0NmQ0ZTA3ODZlZjNkIiwiX192IjowLCJpYXQiOjE3MTQ5Mjc1NjksImV4cCI6MTcxNDk2MzU2OX0.o-yEb_xEJAGhETjF96SFsP0zsHjOzr59YlPItcKVpYg",
  // },
});
