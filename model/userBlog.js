const mongoose = require("mongoose") 

const userBlogSchema = new mongoose.Schema({
    blog: {
        type: String
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }

})

const Blog = mongoose.model("blog", userBlogSchema)
module.exports = Blog