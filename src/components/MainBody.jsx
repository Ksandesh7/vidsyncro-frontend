/* eslint-disable no-unused-vars */
import React from "react";
import Header from "./Header";
import Tabs from "./Tabs";
import Assets from "./Assets";

const MainBody = ({ selectedProject }) => {
  return (
    <div>
      <Header selectedProject={selectedProject} />
      <Tabs />
      <div className="p-4">
        <Assets />
      </div>
    </div>
  );
};

export default MainBody;
