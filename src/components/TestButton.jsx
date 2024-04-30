// AddButton.jsx

import React, { useState } from "react";
import axios from "axios";
import ProgressBar from "@ramonak/react-progress-bar";
const AddButton = ({ onUpload }) => {
  const [hovered, setHovered] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleButtonClick = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.multiple = "multiple";
    fileInput.addEventListener("change", handleFileInputChange);
    fileInput.click();
  };

  const handleFileInputChange = (event) => {
    const files = event.target.files;
    if (files.length === 0) return;

    // Update the state with the selected files
    setSelectedFiles(Array.from(files));

    // Prepare data in the desired format
    const upload = {
      files: Array.from(files).map((file) => ({
        project_id: "662cb6594b91590bdd3b1b4e",
        segment: "assets",
        name: file.name,
      })),
    };

    // Send a POST request to get presigned URLs
    setUploading(true); // Set uploading status to true
    axios
      .post(
        "https://dzwh46h2zf.execute-api.us-east-2.amazonaws.com/Prod/assets/v1/post-assets",
        upload
      )
      .then((response) => {
        const presignedUrls = response.data.urls;

        // Upload files using presigned URLs
        const uploadPromises = presignedUrls.map((url, index) =>
          uploadFile(url, files[index], index)
        );

        Promise.all(uploadPromises)
          .then(() => {
            // Update state to reflect the uploaded videos
            onUpload();
            // Reset state after uploading is complete
            setSelectedFiles([]);
            setUploading(false);
            setUploadProgress(0);
          })
          .catch((error) => {
            console.error("Error uploading files:", error);
            throw error;
          });
      })
      .catch((error) => {
        console.error("Error uploading files:", error);
        throw error;
      });
  };

  const uploadFile = (url, file, index) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("PUT", url, true);
      xhr.setRequestHeader("Content-Type", file.type);
      xhr.upload.onprogress = (event) => {
        const progress = Math.round((event.loaded / event.total) * 100);
        setUploadProgress(progress);
      };
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
  };

  return (
    <div className="fixed bottom-8 right-8 flex items-center">
      <div className="ml-4 ">
        {/* Display the names of selected files */}
        {selectedFiles.map((file, index) => (
          <div key={index} className="text-white">
            {file.name}
          </div>
        ))}
        {/* Display progress bar while uploading */}
        {uploading && (
          <ProgressBar
            //className="mt-2"
            completed={uploadProgress}
            maxCompleted={100}
            baseBgColor="#e0e0de"
            borderRadius="50px"
          ></ProgressBar>
        )}
      </div>
      {/* Display loading status while uploading */}
      {uploading && <div className="ml-4  text-gray-700">Uploading</div>}
      <button
        className="bg-slate-500 text-white rounded-box p-14 relative overflow-hidden"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={handleButtonClick}
      >
        {/* Animation for text */}
        <div
          className={`absolute top-0 left-full w-auto h-full px-6 bg-gray-900 text-white flex items-center transition-all duration-150 ${
            hovered ? "transform translate-x-0" : "transform -translate-x-full"
          }`}
        >
          Add Files/Videos
        </div>
        {/* Button icon */}
        <span>+</span>
      </button>
    </div>
  );
};

export default AddButton;
