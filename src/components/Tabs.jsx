/* eslint-disable no-unused-vars */
import React from "react";

const Tabs = () => {
  return (
    <div className="bg-gray-700 text-white py-4 px-6">
      <ul className="flex space-x-6">
        <li className="cursor-pointer">Assets</li>
        <li className="cursor-pointer">Timeline</li>
        <li className="cursor-pointer">Edited Videos</li>
        <li className="cursor-pointer">Production</li>
      </ul>
    </div>
  );
};

export default Tabs;
