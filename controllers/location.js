const Location = require("../module/location")
const Role = require("../module/role")
class LocationController {

    async locations (req, res) {
        try {
            const locations = await Location.find()
            return res.json(locations)
        } catch (e) {
            console.log(e)
        }
    }

    async addLocation (req, res) {
        try {
            const { title, roles } = req.body

            roles.map( async item => {
                const role = await Role.findOne({title: item})
                if (!role) {
                    const role = new Role({title: item})
                    await role.save()
                }

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