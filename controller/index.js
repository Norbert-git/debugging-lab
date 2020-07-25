const express = require('express')
const kittens = require("../modules/kittens")

const router = express.Router()

// Add some routes
router.get("/", (request, response) => {
  res.render("index.ejs", {kittens})

})


module.exports = kittens;
