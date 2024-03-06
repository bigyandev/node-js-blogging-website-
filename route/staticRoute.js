const express = require("express")
const User = require("../model/user")
const router = express.Router()
const Blog = require("../model/userBlog")

router.get("/signup", (req,res) => {
  res.render("signup")
})

router.get("/login", (req,res) => {
    res.render("login")
})

router.get("/", async(req,res) => {
  if(!req.user) return res.redirect("/login")
  const blog = await Blog.find({createdBy: req.user._id})
    return res.render("homepage", {
        allBlogs: blog,
        name: req.user.name
    })
   
    
})



module.exports = router