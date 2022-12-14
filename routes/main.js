const productsRouter = require("./products.router")
const usersRouter = require("./users.router")

function routesApp(app) {
    app.use("/products", productsRouter)
    app.use("/users", usersRouter)
}

module.exports = routesApp