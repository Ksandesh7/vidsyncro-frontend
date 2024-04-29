import { axiosClient } from "./axiosClient";

export default async function uploadFile(file, projectId, segment, onProgress) {
  try {
    console.log(projectId, segment, file);

    if (!projectId || !segment) {
      throw new Error("No project id or segment");
    }

    const res = await axiosClient.post("/assets/v1/post-assets", {
      files: [
        {
          name: file.name,
          project_id: projectId,
          segment: segment,
        },
      ],
    });

    const url = res.data.urls[0];

    await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("PUT", url, true);
      xhr.setRequestHeader("Content-Type", file.type);
      xhr.upload.onprogress = onProgress;
      xhr.onload = () => {
        if (xhr.status === 200) {
          resolve();
        } else {
          reject(xhr.statusText);
        }
      };
      xhr.onerror = () => reject(xhr.statusText);
      xhr.send(file);
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
}
