const AdminMiddleWare = (req, res, next) => {
  if (req.headers.email === "admin@gmail.com") {
    next();
  } else {
    res
      .status(403)
      .send("Your are not authenticated for perform this operation");
  }
};

module.exports = AdminMiddleWare;
