import React from "react";
import Sidebar from "../components/Sidebar";
import AppNavigation from "../router/AppNavigation";
import NavBar from "../components/NavBar";
// import TeacherNavigation from "../router/TeacherNavigation";

const TeacherHome = () => {
  return (
    <>
      <div className="row">
        {/* Sidebar - Hidden on screens smaller than 1024px */}
        <div className="d-none d-lg-block col-lg-2 sidebar">
          <Sidebar />
        </div>

        {/* Main Content - Adjusts to full width on smaller screens */}
        <div className="col-lg-10 col-md-12 ">
          <div className="container">
            {/* Navigation Bar */}
            <NavBar />
            {/* <TeacherNavigation/> */}
            {/* App Navigation */}
          </div>
        </div>
      </div>
    </>
  );
};

export default TeacherHome
