const express = require("express");
const {
  addPartner,
  getPartnerData,
  updatePartnerData,
  deletePartnerData,
} = require("../controller/Partner");

const partnerRouter = express.Router();

partnerRouter.post("/", addPartner);
partnerRouter.get("/", getPartnerData);
partnerRouter.patch("/:id", updatePartnerData);
partnerRouter.delete("/:id", deletePartnerData);

module.exports = partnerRouter;
