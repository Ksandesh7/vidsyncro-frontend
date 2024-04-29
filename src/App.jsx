import React from "react";
import "./index.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Upload from "./components/Upload";

const App = () => {
  return (
    <main className="app flex">
      <Sidebar />
      <Dashboard />
      <Upload />
    </main>
  );
};

export default App;
