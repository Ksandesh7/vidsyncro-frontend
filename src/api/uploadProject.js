import { axiosClient } from "./axiosClient";

export default async function uploadProject(title, description, userId) {
  try {
    const res = await axiosClient.post("/create-project", {
      title,
      description,
      user_id: userId,
    });

    return res.data.data;
  } catch (error) {
    console.log("Error while uploading project: ", error.message);
    throw error;
  }
}
