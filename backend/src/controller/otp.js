const OtpModal = require("../modal/OTP");

const validateOTP = async (req, res) => {
  const { otp } = req.body;
  console.log(otp);
  try {
    let validate = await OtpModal.findOne({ otp: otp });
    console.log(validate);
    if (validate) {
      res.status(200).send({ status: "success", msg: "otp validated" });
    } else {
      res.status(404).send({ status: "error", msg: "failed" });
    }
  } catch (er) {
    res.status(404).send({ status: "error", msg: er.message });
  }
};

module.exports = {
  validateOTP,
};
