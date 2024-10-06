const express = require("express");
const router = express.Router();
const path = require('path');

router.get("/", async (req, res, next) => {
  res.redirect("/sites");
});
router.get("/sites", async (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});
router.get("/sites/berlangganan", async (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'brl.html'));
});
router.get("/sites/contact", async (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'contact.html'));
});
router.get("/sites/legal", async (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'legal.html'));
});
router.get("/about", async (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'about.html'));
});

module.exports = router;
