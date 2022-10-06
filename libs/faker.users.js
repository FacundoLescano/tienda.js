const { faker } = require("@faker-js/faker")
const { client } = require("./../db/connecting")

const text = 'INSERT INTO users(username) VALUES ($1) RETURNING *'

for (i=0; i < 5; i++) {
    const names = faker.name.fullName()
    client.query(text, [names])
}

console.log("final")