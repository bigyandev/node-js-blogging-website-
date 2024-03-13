const mongoose = require("mongoose") 

const userBlogSchema = new mongoose.Schema({
    blog: {
        type: String
    },
    title: {
        type: String,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    author: {
        type: mongoose.Schema.Types.String,
        ref: "user"
    },
    
}, {timestamps: true}
)

const Blog = mongoose.model("blog", userBlogSchema)
module.exports = Blog