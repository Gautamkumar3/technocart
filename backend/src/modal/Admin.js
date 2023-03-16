const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
  admin_email: {
    type: String,
    required: [true, "email is missing"],
    unique: [true, "Email id must be unique"],
  },
  admin_password: {
    type: String,
    required: [true, "password is missing"],
  },
  Login_link: {
    type: String,
  },
});

const Admin = mongoose.model("admin", AdminSchema);

module.exports = Admin;
