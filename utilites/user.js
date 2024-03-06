
const sessionIDToUser = new Map()

function setUser(id,user) {
    sessionIDToUser.set(id,user)
}

function getUser(id) {
    return sessionIDToUser.get(id)
}

module.exports = {
    setUser,
    getUser
}