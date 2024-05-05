import { axiosClient } from "./axiosClient";

export default async function signIn(email, password) {
  try {
    const res = await axiosClient.post("user/v1/signin", {
      email,
      password,
    },
      
    );
    console.log("Signed in hogaya bandha", res.data);
  } catch (error) {
    console.error("ERROR WHILE SIGN IN");
    throw error;
  }
}
