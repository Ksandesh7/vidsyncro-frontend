import React from "react";
import "./index.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <main className="app flex">
      <Sidebar />
      <Dashboard />
    </main>
  );
};

export default App;
