const Blog = require("../model/userBlog")
async function handleGetAllUsersBlog(req,res) {
    if(!req.user) return res.redirect("/login")
    const blog = await Blog.find({createdBy: req.user._id})
    return res.json(blog)
}

async function handleCreateNewBlog(req,res) {
    const {name,title,blog} = req.body
    await Blog.create({
          name,
          title,
          blog,
          createdBy: req.user._id
    })
    if(!req.user) return res.redirect("/login")
    const blogs = await Blog.find({createdBy: req.user._id})
    res.render("homepage", {
        allBlogs: blogs,
        name: req.user.name
    })
}

module.exports = {
    handleGetAllUsersBlog,
    handleCreateNewBlog
}