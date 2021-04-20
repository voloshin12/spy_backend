const Router = require("express")
const router = new Router()
const GameController = require("../controllers/game")

router.post('/create-game', GameController.createGame)