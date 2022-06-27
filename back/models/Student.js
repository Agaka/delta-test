const knex = require("../database/connection")

class Student {

    async findAll() {
        try {
            const result = await knex.select("id", "name", "address", "image").table("students")
            return result
        } catch (err) {
            console.log(err)
            return []
        }
    }

    async findById(id) {
        try {
            const result = await knex.select("id", "name", "address", "image").where(id).table("students")
            return result
        } catch (err) {
            console.log(err)
            return []
        }
    }

    async createStudent(data) {
        try {
            await knex.insert(data).table("students")
        } catch (err) {
            console.log(err)
        }
    }

    async update(id, data) {
        try {
            await knex.update(data).where({ id }).table("students")
            return { status: true }
        } catch (err) {
            return { status: false, err: err }
        }

    }

    async delete(id) {
        try {
            await knex('students').where('id', id).del()
          
            return { status: true }
        } catch (err) {
            return { status: false, err: err }
        }

    }
}

module.exports = new Student