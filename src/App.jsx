/* eslint-disable no-unused-vars */
import React from "react";
import "./index.css";
import Sidebar from "./components/Sidebar";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App = () => {
  return (
    <main className="app">
      <QueryClientProvider client={queryClient}>
          <Sidebar />
      </QueryClientProvider>
    </main>
  );
};

export default App;

