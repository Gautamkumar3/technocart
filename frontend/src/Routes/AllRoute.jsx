import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminLogin from "../Page/AdminLogin";
import ErrorPage from "../Page/ErrorPage";
import Home from "../Page/Home";
import PartnerLogin from "../Page/PartnerLogin";

const AllRoute = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/super_admin/login" element={<AdminLogin />} />
      <Route path="/super-admin/dashboard" element={<Home />} />
      <Route path="/:name/login" element={<PartnerLogin />} />
      <Route path="/partner-name/add_event" element={<Home />} />
      <Route path="/partner-name/thankyoupage" element={<Home />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AllRoute;
