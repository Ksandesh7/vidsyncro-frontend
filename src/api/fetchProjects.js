import { axiosClient } from "./axiosClient";

export default async function fetchProjects(userId) {
  try {
    const res = await axiosClient.get("/project/v1/get-projects", {
      params: {
        user_id: userId,
      },
    });

    return res.data.data;
  } catch (error) {
    console.log("Error while uploading project: ", error.message);
    throw error;
  }
}
