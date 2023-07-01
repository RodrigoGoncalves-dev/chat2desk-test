const User = require("../model/user-model");

class UserController {
    async index(req, res) {
        const users = await User.find()

        return res.status(200).send({ message: "Success to get all users", listUsers: users })
    }

    async store(req, res) {
        const {name, email, age} = req.body

        const createUser = await User.create({name,email,age})

        return res.status(201).send({message: "User created with successfully", user: createUser})
    }

    async update(req, res) {
        const {id} = req.param
        const {name, email, age} = req.body
        const newData = {
            name: name,
            email: email,
            age: age
        }

        const updateUser = await User.findByIdAndUpdate(id, newData, { new: true })

        return res.status(204).send({message: "User updated with successfully", user: updateUser})
    }

    async delete(req, res) {
        const {id} = req.param

        await User.findByIdAndDelete(id)

        return res.status(200).send({message: "User deleted with successfully"})
    }
}

module.exports = UserController;