const express = require("express")
const router = express.Router()
const {handleGetAllUsersBlog,
    handleCreateNewBlog, 
    handleSingleBlogPost,
    handleDeletePost
    } = require("../controller/userBlog")

router.get("/", handleGetAllUsersBlog)
router.post("/", handleCreateNewBlog)

router.route("/:id").get(handleSingleBlogPost)
router.delete(":/id").delete(handleDeletePost)

module.exports = router