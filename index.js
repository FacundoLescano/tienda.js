const express = require("express")
const app = express()
const routesApp = require("./routes/main")

routesApp(app)

app.listen(8080, () => {
    console.log("8080")
})