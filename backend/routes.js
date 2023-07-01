const { Router } = require('express')
const route = Router();
const UserController = require('./controller/user-controller')

const controller = new UserController()

route.get('/', controller.index)
route.post('/create', controller.store)
route.put('/update/:id', controller.update)
route.delete('/delete/:id', controller.delete)

module.exports = route