import React, { useCallback, useContext, useState } from "react";
import { ProjectContext } from "../context/ProjectContext";
import ProgressBar from "@ramonak/react-progress-bar";
import uploadFile from "../api/uploadAssets";

const Upload = () => {
  const { currentProjectId, assets } = useContext(ProjectContext);
  const [hovered, setHovered] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [file, setFile] = useState(null);

  const handleUpload = useCallback(
    async (event) => {
      const files = event.target.files;

      if (files.length === 0) return;

      setFile(files[0]);
      setUploadProgress(0);
      setUploading(true);

      try {
        await uploadFile(
          files[0],
          currentProjectId,
          assets.current_section,
          (event) => {
            const progress = Math.round((event.loaded / event.total) * 100);
            console.log("Uploaded: ", progress);
            setUploadProgress(progress);
          }
        );
      } catch (error) {
        console.log(error.message);
      } finally {
        setUploading(false);
      }
    },
    [currentProjectId, assets.current_section]
  );

  const openFileDialog = useCallback(() => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.addEventListener("change", handleUpload);
    fileInput.click();
  }, [handleUpload]);

  return (
    <div className="fixed bottom-8 right-8 flex items-center">
      <div className="ml-4">
        {uploading && (
          <div className="w-full mr-5">
            <p className="text-white">Uploading: {file.name}</p>
            <ProgressBar
              completed={uploadProgress}
              maxCompleted={100}
              baseBgColor="#e0e0de"
              borderRadius="50px"
              width="500px"
            ></ProgressBar>
          </div>
        )}
      </div>
      {/* Display loading status while uploading */}
      <button
        className="bg-slate-500 text-white rounded-box p-14 relative overflow-hidden"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={openFileDialog}
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

export default Upload;
