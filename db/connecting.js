const { Client } = require("pg")

const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "tienda",
    password: "crm77ca0213",
    port: 5432
})

client.connect()

//client.query("INSERT INTO users (username) VALUES " + (names), (err, res) => {
//    console.log()
//    client.end()
//})

module.exports = { client }