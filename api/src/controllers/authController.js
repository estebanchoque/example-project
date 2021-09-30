const getUser = (req, res) => {
  return res.status(200).send("Soy getUser en authRoute");
};

module.exports = {
  getUser,
};
