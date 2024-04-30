/* eslint-disable no-unused-vars */
import React from "react";

const Header = ({ projectName }) => {
  return (
    <header className="bg-gray-800 text-white py-4 px-6">
      <h1 className="text-xl font-bold">{projectName}</h1>
    </header>
  );
};

export default Header;
