/* eslint-disable react/prop-types */
import React from "react";

const PreviewButton = ({ videoUrl }) => {
  const handlePreview = () => {
    // Implement your preview logic here
    console.log("Previewing video:", videoUrl);
  };

  return (
    <button
      onClick={handlePreview}
      className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
    >
      Preview
    </button>
  );
};

export default PreviewButton;
