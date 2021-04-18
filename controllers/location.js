class Location {
    async locations (req, res) {
        try {
            return res.json({message: "hello"})
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new Location()