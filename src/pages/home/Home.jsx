import React from "react";
import Navbar from "../../component/home/Navbar";

const Home = () => {
  return (
    <>
      <navbar className="flex flex-between items-center">
        <Navbar />
        {/* main content page */}
        {/* sidebar */}
        <Sidebar />
        {/* maincontent */}
        <MainContent />
        {/* ad content  */}
        <AdContent />
      </navbar>
    </>
  );
};

export default Home;
