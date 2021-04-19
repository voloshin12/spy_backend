const Location = require("../module/location")
const Role = require("../module/role")
class LocationController {

    async locations (req, res) {
        try {
            return res.json({message: "hello"})
        } catch (e) {
            console.log(e)
        }
    }

    async addLocation (req, res) {
        try {
            const { title, roles } = req.body
            let role
            roles.map( async item => {
                role = new Role({title: item})
                await role.save()
            })
            const location = new Location({title, roles} )
            await location.save()
            return res.json({message: "Location added successfully", data: req.body})
        } catch (e) {
            console.log(e)
        }
    }

}

module.exports = new LocationController()