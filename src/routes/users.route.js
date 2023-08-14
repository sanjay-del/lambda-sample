const express = require("express");
const router = express.Router();
const { userController } = require("../controllers");

router.get("/user", userController.validateDid);

module.exports = router;
