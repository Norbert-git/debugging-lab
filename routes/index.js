const express = require('express');
const kittens = require("./kittens.js");

const router = express.Router();

// Add some routes
router.get("/", (res, req) => {
  res.render("index.html", {
    kittens: kittens.getKittens()
  });
});


module.exports = router;
