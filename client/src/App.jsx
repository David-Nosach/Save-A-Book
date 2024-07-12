import React from "react";
import { Outlet } from "react-router-dom"; // Import the Outlet component for nested routing
import Navbar from "./components/Navbar"; // Import the Navbar component

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App; // Export the App component as the default export
