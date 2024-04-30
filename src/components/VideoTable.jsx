/* eslint-disable no-unused-vars */
import React from "react";

const VideoTable = ({ videos }) => {
  return (
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
  );
};

export default VideoTable;
