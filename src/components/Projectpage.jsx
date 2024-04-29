import React, { useState, useEffect } from "react";
import FilesGrid from "./FilesGrid";
import AddButton from "./Addbutton";
import TestButton from "./TestButton";
import axios from "axios";

const ProjectPage = () => {
  const [activePage, setActivePage] = useState("Uploaded Files");
  const [activeLineStyles, setActiveLineStyles] = useState({
    width: 0,
    left: 0,
  });
  const showAddButton = activePage !== "Production";
  useEffect(() => {
    // Set initial styles for the active line to match the "Uploaded Files" page
    const uploadedFilesLink = document.querySelector("#UploadedFiles");
    if (uploadedFilesLink) {
      setActiveLineStyles({
        width: uploadedFilesLink.offsetWidth,
        left: uploadedFilesLink.offsetLeft,
      });
    }
  }, []);

  const handleItemClick = (pageName, offsetLeft, offsetWidth) => {
    setActivePage(pageName);
    setActiveLineStyles({
      width: offsetWidth,
      left: offsetLeft,
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
        <ul className="flex space-x-4">
          <li>
            <a
              id="UploadedFiles"
              href="#UploadedFiles"
              className={`text-${
                activePage === "Uploaded Files" ? "white" : "gray-600"
              } hover:text-white font-semibold `}
              onClick={(e) =>
                handleItemClick(
                  "Uploaded Files",
                  e.target.offsetLeft,
                  e.target.offsetWidth
                )
              }
            >
              Uploaded Files
            </a>
          </li>
          <li>
            <a
              href="#Timeline"
              className={`text-${
                activePage === "Timeline" ? "white" : "gray-600"
              } hover:text-white font-semibold`}
              onClick={(e) =>
                handleItemClick(
                  "Timeline",
                  e.target.offsetLeft,
                  e.target.offsetWidth
                )
              }
            >
              Timeline
            </a>
          </li>
          <li>
            <a
              href="#EditedVideos"
              className={`text-${
                activePage === "Edited Videos" ? "white" : "gray-600"
              } hover:text-white font-semibold`}
              onClick={(e) =>
                handleItemClick(
                  "Edited Videos",
                  e.target.offsetLeft,
                  e.target.offsetWidth
                )
              }
            >
              Edited Videos
            </a>
          </li>
          <li>
            <a
              href="#Production"
              className={`text-${
                activePage === "Production" ? "white" : "gray-600"
              } hover:text-white font-semibold`}
              onClick={(e) =>
                handleItemClick(
                  "Production",
                  e.target.offsetLeft,
                  e.target.offsetWidth
                )
              }
            >
              Production
            </a>
          </li>
        </ul>
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

      <FilesGrid activePage={activePage }/>

      {/* Add Button */}
      {showAddButton && <TestButton />}
    </div>
  );
};

export default ProjectPage;
