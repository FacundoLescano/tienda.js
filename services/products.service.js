const { client } = require("./../db/connecting")

class ServiceProducts {

    constructor(respuesta) {
        client.query("SELECT name, price FROM products", (err, res) => {
            this.respuesta = res.rows
            client.end()
        })
    }

    mostrar() {

        return this.respuesta

    }

}

module.exports = ServiceProducts