import { axiosClient } from "./axiosClient";

export default async function fetchAssets(projectId, userId, segment) {
  try {
    const res = await axiosClient.get("/assets/v1/get-assets", {
      params: {
        user_id: userId,
        project_id: projectId,
        segment,
      },
    });

    return res.data.data;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}
