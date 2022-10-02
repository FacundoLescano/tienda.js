const express = require("express")
const router = express()

router.get("/", (req, res) => {
    res.send("hola mundo")
})

module.exports = router