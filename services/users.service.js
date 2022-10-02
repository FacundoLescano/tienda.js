const { faker } = require('@faker-js/faker');

class UserService {

    constructor(name, lastname, email) {
        this.name = faker.name.firstName()
        this.lastname = faker.name.lastName()
        this.email = faker.internet.email()
    }


    find() {
        return this.email
    }

    create() {

    }

    update() {

    }

    delete() {

    }

}

module.exports = UserService

