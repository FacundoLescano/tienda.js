const express = require("express")
const router = express()
const UserService = require("./../services/users.service")
const service = new UserService()

router.get("/", (req, res) => {
    const users = service.find()
    res.json(service)
})

module.exports = router