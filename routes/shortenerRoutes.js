const express = require("express")
const { redirect, createShortener } = require("../controllers/shortenerController")
const router = express.Router()

router.post("/", createShortener)

router.post("/redirect/", redirect)

module.exports = router