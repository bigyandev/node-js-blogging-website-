const express = require("express")
const { handleSignInUser,handleUserLogIn } = require("../controller/user")
const router = express.Router()

router.post("/login", handleUserLogIn)
router.post("/", handleSignInUser)

module.exports = router

