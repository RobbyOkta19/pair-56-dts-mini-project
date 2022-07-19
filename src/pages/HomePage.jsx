import React from "react";
import PopularList from "../containers/PopularList";

import MainPage from "../pages/MainPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className="flex-col w-full px-4 md:px-12 ">
        <PopularList title={"Popular"} />
        <PopularList title={"On The Agenda"} />
        <PopularList title={"Top Movies"} />
        <PopularList title={"Popular"} />
      </div>
    </>
  );
};
export default HomePage;
