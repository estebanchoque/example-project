const router = require("express").Router();
const { postUser } = require("../controllers/userController");

router.post("/", postUser);

module.exports = router;
