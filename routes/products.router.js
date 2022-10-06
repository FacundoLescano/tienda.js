const express = require("express")
const router = express()
const ServiceProducts = require("./../services/products.service")
const service = new ServiceProducts()

router.get("/", (req, res) => {
    const dates = service.mostrar()
    res.json(dates)
})

router.post("/create")

module.exports = router