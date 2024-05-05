import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Upload from "./components/Upload";
import EditedVideosComponent from "./components/EditedVideosComponent";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { Account } from "./components/Account";
import Status from "./components/Status";
import Settings from "./components/Settings";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Assuming initial state

  const handleLogin = () => {
    // Simulate login logic (replace with actual authentication)
    setIsLoggedIn(true);
  };

  return (
    <main className="app flex">
      {isLoggedIn && ( // Render only if logged in
        <>
          <Sidebar />
          <Dashboard />
          <Upload />
        </>
      )}

      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} /> {/* Pass handleLogin prop */}
        </Routes>
      </BrowserRouter>

      {/* Other components can be rendered conditionally or based on routes */}
      {/* <EditedVideosComponent /> */}
      {/* <Account> */}
      {/* <Status /> */}
      {/* <Settings /> */}
    </main>
  );
};

export default App;
