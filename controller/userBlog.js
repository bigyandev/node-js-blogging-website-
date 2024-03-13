const Blog = require("../model/userBlog")

async function handleGetAllUsersBlog(req,res) {
    if(!req.user) return res.redirect("/login")
    const blog = await Blog.find({})
    return res.json(blog)
}

async function handleCreateNewBlog(req,res) {
    const {blog,title} = req.body
    await Blog.create({
          blog,
          title,
          createdBy: req.user._id,
          author: req.user.name,
    })
    if(!req.user) return res.redirect("/login")
    const blogs = await Blog.find({})
    console.log(blogs)
    res.render("homepage", {
        allBlogs: blogs,
        loggedInUser: req.user.name || null,
    })
}

async function handleSingleBlogPost(req,res) {
  const result = await Blog.findById(req.params.id)
  return res.render("blogpage", {
    result: result
  })  
}

async function handleDeletePost(req,res) {
   return await Blog.findByIdAndDelete(req.params.id)
}

module.exports = {
    handleGetAllUsersBlog,
    handleCreateNewBlog,
    handleSingleBlogPost,
    handleDeletePost
}