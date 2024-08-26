const express = require("express");
const Users = require('../models/user.model');
const router = express.Router();
const { updateUsers } = require("../controllers/Users.controller.js");

router.post("/", updateUsers);

module.exports = router;
