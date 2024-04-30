// Update ProjectPage.jsx

import React, { useState, useEffect } from "react";
import FilesGrid from "./FilesGrid";
import AddButton from "./TestButton";
import axios from "axios";

const TestProjectPage = () => {
  const [activePage, setActivePage] = useState("Uploaded Files");
  const [activeLineStyles, setActiveLineStyles] = useState({
    width: 0,
    left: 0,
  });
  const [uploadedVideos, setUploadedVideos] = useState([]);

  const showAddButton = activePage !== "Production";

  useEffect(() => {
    // Fetch uploaded videos when component mounts
    fetchUploadedVideos();
  }, []);

  const fetchUploadedVideos = async () => {
    try {
      const response = await axios.get(
        "https://k1lmamnchf.execute-api.us-east-2.amazonaws.com/Prod/assets/v1/get-assets?project_id=662cb6594b91590bdd3b1b4e&segment=assets&user_id=1"
      );
      setUploadedVideos(response.data.assets);
    } catch (error) {
      console.error("Error fetching uploaded videos:", error);
    }
  };

  const handleItemClick = (pageName, offsetLeft, offsetWidth) => {
    setActivePage(pageName);
    setActiveLineStyles({
      width: offsetWidth,
      left: offsetLeft,
    });
  };

  const handleUpload = () => {
    // After uploading files, fetch and update the uploaded videos
    fetchUploadedVideos()
      .then(() => {
        console.log("Fetched Videos?");
      })
      .catch((err) => {
        throw err;
      });
  };

  return (
    <div>
      {/* Header */}
      <header className="bg-gray-800 py-4 px-8">
        <h1 className="text-white text-2xl font-semibold">Project Name</h1>
      </header>

      {/* Navbar */}
      <nav className="relative py-4 px-8">
        <ul className="flex space-x-4">{/* Navigation items... */}</ul>
        {/* Active Line */}
        <div
          className="absolute bottom-0 left-0 bg-white transition-all duration-300"
          style={{
            width: activeLineStyles.width,
            left: activeLineStyles.left,
            height: "2px",
          }}
        ></div>
      </nav>

      {/* Files Grid */}
      {activePage === "Uploaded Files" && <FilesGrid files={uploadedVideos} />}

      {/* Add Button */}
      {showAddButton && <AddButton onUpload={handleUpload} />}
    </div>
  );
};

export default TestProjectPage;
