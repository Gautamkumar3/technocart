const express = require("express");
const { addPartner } = require("../controller/Partner");

const partnerRouter = express.Router();

partnerRouter.post("/", addPartner);

module.exports = partnerRouter;
