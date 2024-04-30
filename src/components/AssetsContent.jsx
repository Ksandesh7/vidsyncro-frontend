/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const AssetsContent = () => {
  // State to manage uploaded videos
  const [videos, setVideos] = useState([]);

  // Function to handle file upload
  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    // Simulate upload process
    setTimeout(() => {
      const newVideo = {
        name: uploadedFile.name,
        status: "Uploading", // You can update this status as needed
      };
      setVideos((prevVideos) => [...prevVideos, newVideo]);
    }, 1000); // Simulating a delay for the upload process
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Assets</h2>
      {/* File upload input */}
      <input type="file" onChange={handleFileUpload} />

      {/* Table to display uploaded videos */}
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Video Name</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {videos.map((video, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{video.name}</td>
              <td className="border px-4 py-2">{video.status}</td>
              <td className="border px-4 py-2">Preview</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssetsContent;
