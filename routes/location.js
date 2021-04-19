const Router = require("express")
const router = new Router()
const LocationController = require("../controllers/location")

router.get('/locations',  LocationController.locations)
router.post('/location', LocationController.addLocation)
module.exports = router