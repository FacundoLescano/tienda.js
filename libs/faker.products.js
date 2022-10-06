const { faker } = require("@faker-js/faker")
const { client } = require("./../db/connecting")

const text = 'INSERT INTO products(name, price) VALUES ($1, $2) RETURNING *'

for (i=0; i < 5; i++) {
    const names = faker.commerce.product()
    const prices = faker.commerce.price(100, 500, 0)
    client.query(text, [names, prices])
}

console.log("final")