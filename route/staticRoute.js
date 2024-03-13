const express = require("express")
const User = require("../model/user")
const router = express.Router()
const Blog = require("../model/userBlog")
const moment = require("moment")

router.get("/signup", (req,res) => {
  res.render("signup")
})

router.get("/login", (req,res) => {
    res.render("login")
})

router.get("/", async(req,res) => {
  if(!req.user) return res.redirect("/login")
  const blog = await Blog.find({})
    return res.render("homepage", {
        allBlogs: blog,
        loggedInUser: req.user.name 
    })
})

router.get("/blog/:id", async(req,res) => {
  if(!req.user) return res.redirect("/login")
  const result = await Blog.findById(req.params.id)
  console.log(result)
  if(!result) res.status(404).json({msg: "not found"})
  res.render("blogpage", {
    result: result,
    time: moment(result.createdAt).format("DD-MM-YYYY, h:mm:ss a")
  })
})



module.exports = router