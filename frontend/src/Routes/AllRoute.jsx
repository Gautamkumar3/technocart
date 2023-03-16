import React from "react";
import { Route, Routes } from "react-router-dom";
import AddEvent from "../Page/AddEvent";
import AdminDashboard from "../Page/AdminDashboard";
import AdminLogin from "../Page/AdminLogin";
import AllEvent from "../Page/AllEvent";
import ErrorPage from "../Page/ErrorPage";
import Home from "../Page/Home";
import PartnerLogin from "../Page/PartnerLogin";
import ThankYou from "../Page/ThankYou";

const AllRoute = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/super_admin/login" element={<AdminLogin />} />
      <Route path="/super_admin/dashboard" element={<AdminDashboard />} />
      <Route path="/:name/login" element={<PartnerLogin />} />
      <Route path="/:name/add_event" element={<AddEvent />} />
      <Route path="/:name/thankyoupage" element={<ThankYou />} />
      <Route path="/all_event" element={<AllEvent />} />

      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AllRoute;
