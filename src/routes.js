const express = require('express')
const routes = express.Router()
const PlayerController = require('./app/controllers/PlayerController')
const firebaseCreate = require('../src/app/middleware/FirebaseCreate')
const firebaseAuth = require('../src/app/middleware/FirebaseAuth')


routes.get('/players', firebaseAuth, PlayerController.index)
routes.post('/players',firebaseCreate, PlayerController.register)
routes.post('/login', PlayerController.login)

module.exports = routes