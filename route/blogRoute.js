const express = require("express")
const router = express.Router()
const {handleGetAllUsersBlog,handleCreateNewBlog} = require("../controller/userBlog")

router.get("/", handleGetAllUsersBlog)
router.post("/", handleCreateNewBlog)

module.exports = router