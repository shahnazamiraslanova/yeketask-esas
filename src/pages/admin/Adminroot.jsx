import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/client/Header";

const Adminroot = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Adminroot;
