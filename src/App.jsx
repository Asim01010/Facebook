import React from "react";
import "./globals.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Home from "./pages/home/Home";
import Navbar from "./component/Navbar";

const App = () => {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="home" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
