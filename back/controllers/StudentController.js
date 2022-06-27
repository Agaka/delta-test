const Student = require("../models/Student")
const path = require("path")

class StudentController {

    async index(req, res) {
        const students = await Student.findAll()
        res.json(students)
    }

    async findStudent(req, res) {
        const id = req.params
        const student = await Student.findById(id)
        if(student.length < 1) {
            res.status(404)
            res.send("Usuário não encontrado")
        } else {
            res.json(student[0])
        }
    }

    async create(req, res) {
        const data = {
            name: req.body.name,
            address: req.body.address,
            image: req.file.filename
        }
        const result = await Student.createStudent(data)
        res.status(200).send(result)

    }

    async edit(req, res) {
        const { id } = req.params
        let data
        if (req.file != undefined) {
            data = {
                name: req.body.name,
                address: req.body.address,
                image: req.file.filename
            }
        } else {
            data = {
                name: req.body.name,
                address: req.body.address,
            }
        }

        console.log(data)

        const result = await Student.update(id, data)
        
        if(result) {
            if(result.status) {
                res.send("Tudo ok")
            } else {
                res.status(406)
                res.send(result.err)
            }
        } else {
            res.status(406)
            res.send("Ocorreu um erro no servidor")
        }
    }

    async remove(req, res) {
        const { id } = req.params

        const result = await Student.delete(id)
        
        if(result) {
            if(result.status) {
                res.send("Tudo ok")
            } else {
                res.status(406)
                res.send(result.err)
            }
        } else {
            res.status(406)
            res.send("Ocorreu um erro no servidor")
        }
    }
}

module.exports = new StudentController