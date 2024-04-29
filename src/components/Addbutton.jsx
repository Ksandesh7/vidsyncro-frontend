// AddButton.js
import React, { useState } from "react";

const AddButton = () => {
  const [hovered, setHovered] = useState(false);

  const handleButtonClick = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.multiple = "multiple";
    fileInput.addEventListener("change", handleFileInputChange); // Listen to the change event
    fileInput.click();
  };

  const handleFileInputChange = (event) => {
    const selectedFiles = event.target.files; // Get the selected files
    // Access metadata of each selected file
    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];
      console.log("File name:", file.name);
      console.log("File size:", file.size);
      console.log("File type:", file.type);
      //console.log("Last modified date:", file.lastModifiedDate);
    }
  };

  return (
    <div className="fixed bottom-8 right-8">
      <button
        className="bg-slate-500 text-white rounded-box p-14 relative overflow-hidden"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={handleButtonClick} // Use the function to trigger file input click
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
