/* eslint-disable react/prop-types */
import React, { useRef } from "react";

const UploadButton = ({ onFileSelect }) => {
  const fileInputRef = useRef(null);

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    onFileSelect(files);
  };

  return (
    <div>
      <input
        type="file"
        accept="video/*"
        style={{ display: "none" }}
        ref={fileInputRef}
        onChange={handleFileSelect}
        multiple
      />
      <button
        onClick={() => fileInputRef.current.click()}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Upload Video
      </button>
    </div>
  );
};

export default UploadButton;
