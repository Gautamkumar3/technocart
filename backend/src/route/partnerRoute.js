const express = require("express");
const { addPartner, getPartnerData } = require("../controller/Partner");

const partnerRouter = express.Router();

partnerRouter.post("/", addPartner);
partnerRouter.get("/", getPartnerData);

module.exports = partnerRouter;
