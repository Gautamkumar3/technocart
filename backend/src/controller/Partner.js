const PartnerModal = require("../modal/Partner");

const addPartner= async (req, res) => {
  try {
    let data = new PartnerModal({ ...req.body });
    await data.save();
    res.status(200).send({ status: "success", data: data });
  } catch (er) {
    res.status(403).send({ status: "error", msg: er.message });
  }
};

module.exports = {
  addPartner,
};
