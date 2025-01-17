import React from "react";

import NavigationBar from "../components/navigation/navBar";
import Footer from "../components/footer";

import { Outlet } from "react-router-dom";

const MainPage = () => {
  return (
    <>
      <NavigationBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainPage;
