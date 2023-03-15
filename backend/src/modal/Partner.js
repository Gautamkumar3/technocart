const mongoose = require("mongoose");

const PartnerSchema = new mongoose.Schema({
  Partner_name: { type: String, required: [true, "Partner name is missing"] },
  Partner_email: { type: String, required: [true, "Partner email is missing"] },
  Login_link: { type: String, required: [true] },
});

const Partner = mongoose.model("partner", PartnerSchema);

module.exports = Partner;