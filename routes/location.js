const Router = require("express")
const router = new Router()
const controller = require("../controllers/location")

router.get('/locations',  controller.locations)

module.exports = router