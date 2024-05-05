import { axiosClient } from "./axiosClient";

export default async function createAccount() {
  try {
    const res = await axiosClient.post("user/v1/create-account", {
      username,
      email,
      password,
    });
    console.log(res.data);
  } catch (error) {}
}
