const express = require("express")
const app = express()
const path = require("path")
const mongoose = require("mongoose")
const { connectDb } = require("./connection")
const cookieParser = require("cookie-parser")
const methodOverride = require("method-override")

const blogRoute = require("./route/blogRoute")
const staticRoute = require("./route/staticRoute")
const userRoute = require("./route/user")
const { restrictToLoggedInUserOnly, checkAuth } = require("./middleware/userBlog")

//connection 
connectDb("mongodb://127.0.0.1:27017/formdata")

//middleware 
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))
app.use(methodOverride("_method"))

//templating engine
app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))

//route
app.use("/",checkAuth, staticRoute)
app.use("/users", userRoute)
app.use("/api/users", restrictToLoggedInUserOnly ,blogRoute)


app.listen(8001)