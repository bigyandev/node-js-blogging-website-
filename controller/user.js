const User = require("../model/user")
const {v4: uuidv4} = require("uuid")
const {setUser} = require("../utilites/user")


async function handleSignInUser(req,res) {
  const {name,email,password} = req.body
  await User.create({
    name,
    email,
    password
  })
  res.redirect("/login")
}

async function handleUserLogIn(req,res) {
  const {email,password} = req.body
  const loggedUser = await User.findOne({email, password})
  console.log(loggedUser)
  if(!loggedUser) return res.redirect("/login")
  const sessionId = uuidv4()
  setUser(sessionId,loggedUser)
  res.cookie("uid", sessionId)
  res.redirect("/")
}

module.exports = {
    handleSignInUser,
    handleUserLogIn
}