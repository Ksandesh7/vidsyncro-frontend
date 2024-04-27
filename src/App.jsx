import React from "react";
import "./index.css";
import Sidebar, { SidebarItem } from "./components/Sidebar";
import {
  UserCircle,
  BarChart3,
  LayoutDashboard,
} from "lucide-react";

const App = () => {
  return (
    <main className="app">
      <Sidebar>
        <SidebarItem icon={<BarChart3 size={20} />} text="Create Project" alert />

        <SidebarItem icon={<LayoutDashboard size={20} />} text="Demo Project 1" active />
    
        <SidebarItem icon={<UserCircle size={20} />} text="Demo Project 2" />
        
      </Sidebar>
    </main>
  );
};

export default App;
