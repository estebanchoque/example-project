const router = require("express").Router();
const { getUser } = require("../controllers/authController");

router.get("/", getUser);

module.exports = router;
