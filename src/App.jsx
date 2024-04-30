import React from 'react';
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Upload from "./components/Upload";
import EditedVideosComponent from './components/EditedVideosComponent';

const App = () => {
  return (
    <main className="app flex">
      <Sidebar />
      <Dashboard />
      <Upload />
      {/* <EditedVideosComponent /> */}
    </main>
  );
};

export default App;

