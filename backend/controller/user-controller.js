const User = require("../model/user-model")
const client = require("../config/redis/index")

class UserController {
    async index(req, res) {
        client.get('allUsers', async (err, reply) => {
            if (reply) {
                console.log("Redis working...")
                res.status(200).send({ message: "Success to get all users", listUsers: JSON.parse(reply) })
            } else {
                const users = await User.find()
                    .then(user => {
                        client.set('allUsers', JSON.stringify(user))
                        return res.status(200).send({ message: "Success to get all users", listUsers: users })
                    }).catch(err => res.status(500).send(err))
            }
        })
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