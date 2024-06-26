/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { ProjectContext } from "../context/ProjectContext";
import Assets from "./Assets";
import Production from "./Production";
import EditedVideos from "./EditedVideos";
import EditedVideosComponent from "./EditedVideosComponent";
import TimelineVideos from "./TimelineVideos";
import { RefreshCcw, RefreshCcwDot } from "lucide-react";

const Dashboard = () => {
  const { assets, setSection, projects, currentProjectId, fetchAssetsWrapper } =
    useContext(ProjectContext);

  const section = assets.current_section;

  const currentProject = currentProjectId
    ? projects.find((e) => e._id === currentProjectId)
    : null;

  if (!currentProject) return;

  return (
    <div className="w-full">
      {/* Header */}
      <header className="bg-gray-800 py-4 px-8">
        <h1 className="text-white text-2xl font-semibold">
          {currentProject.title}
        </h1>
      </header>

      {/* Navbar */}
      <div className="flex justify-between items-center">
        <nav className="relative py-4 px-8 w-full">
          <ul className="flex space-x-4">
            <li>
              <a
                id="UploadedFiles"
                href="#UploadedFiles"
                className={`text-${
                  section === "assets" ? "white" : "gray-600"
                } hover:text-white font-semibold `}
                onClick={(e) => setSection("assets")}
              >
                Assets
              </a>
            </li>
            {/* <li>
              <a
                href="#Timeline"
                className={`text-${
                  section === "timeline_videos" ? "white" : "gray-600"
                } hover:text-white font-semibold`}
                onClick={(e) => setSection("timeline_videos")}
              >
                Timeline videos
              </a>
            </li> */}
            <li>
              <a
                href="#EditedVideos"
                className={`text-${
                  section === "edited_videos" ? "white" : "gray-600"
                } hover:text-white font-semibold`}
                onClick={(e) => setSection("edited_videos")}
              >
                Edited Videos
              </a>
            </li>
            <li>
              <a
                href="#Production"
                className={`text-${
                  section === "production" ? "white" : "gray-600"
                } hover:text-white font-semibold`}
                onClick={(e) => setSection("production")}
              >
                Production
              </a>
            </li>
          </ul>
        </nav>
        <button
          onClick={fetchAssetsWrapper}
          className="text-white hover:text-gray-200 hover:bg-opacity-50 mr-5"
        >
          <RefreshCcw />
        </button>
      </div>
      {
        {
          assets: <Assets />,
          production: <Production />,
          edited_videos: <EditedVideosComponent />,
          timeline_videos: <TimelineVideos />,
        }[section]
      }
    </div>
  );
};

export default Dashboard;
