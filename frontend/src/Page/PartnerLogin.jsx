import React from "react";
import { useParams } from "react-router-dom";

const PartnerLogin = () => {
  const { name } = useParams();
  console.log(name);
  return (
    <div>
      <h1>Partner login</h1>
    </div>
  );
};

export default PartnerLogin;
