const express = require("express");
const router = express.Router();
const contactFormController = require("../controllers/contactFormController");

router.post("/contact", contactFormController);

module.exports = router;
