import React from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Upload from "./components/Upload";
import EditedVideosComponent from "./components/EditedVideosComponent";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { Account } from "./components/Account";
import Status from "./components/Status";
import Settings from "./components/Settings";

const App = () => {
  return (
    <main className="app flex">
      {/* <Sidebar />
      <Dashboard />
      <Upload /> */}
      {/* <EditedVideosComponent /> */}
      <Account>
        <Status />
        <Signup />
        <Login />
        <Settings /> 
      </Account>
    </main>
  );
};

export default App;
