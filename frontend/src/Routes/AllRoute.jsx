import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Page/Home";

const AllRoute = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/super_admin/login" element={<Home />} />
      <Route path="/super-admin/dashboard" element={<Home />} />
      <Route path="/:name/login" element={<Home />} />
      <Route path="/partner-name/add_event" element={<Home />} />
      <Route path="/partner-name/thankyoupage" element={<Home />} />
      <Route path="/*" element={"No router found"} />
    </Routes>
  );
};

export default AllRoute;
