import React from "react";
import "./globals.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Home from "./pages/home/Home";
import Navbar from "./component/home/Navbar";
import Register from "./pages/auth/Register";
import { Toaster } from "react-hot-toast";
import Profile from "./Profile/Profile";

const App = () => {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Toaster />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="home" element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
