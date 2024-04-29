/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import "./index.css";
import ProjectPage from "./components/Projectpage";
import { UserCircle, BarChart3, LayoutDashboard } from "lucide-react";
import TestProjectPage from "./components/TestProjectPage";
import EditedVideosComponent from "./components/EditedVideosComponent";

const App = () => {
  return (
    <>
      {/* <ProjectPage /> */}
      <EditedVideosComponent />
    </>
  );
};

export default App;

