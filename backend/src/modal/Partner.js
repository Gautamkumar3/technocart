const mongoose = require("mongoose");

const PartnerSchema = new mongoose.Schema({
  Partner_name: {
    type: String,
    required: [true, "Partner name is missing"],
    unique: [true, "Email id must be unique"],
  },
  Partner_email: { type: String, required: [true, "Partner email is missing"] },
  Login_link: {
    type: String,
  },
});

PartnerSchema.post("save", function () {
  let name = this.Partner_name;
  let pname = name.split(" ").join("").toLowerCase();
  this.Login_link = `${"localthost"}/${pname}/login`;
});

const Partner = mongoose.model("partner", PartnerSchema);

module.exports = Partner;
