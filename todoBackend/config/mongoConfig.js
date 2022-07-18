const mongoose = require('mongoose')
// connection to MongoDB using Mongoose
module.exports = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        mongoose.connection
        console.log('MongoDB Connected!')
    } catch (error) {
        console.log(error)
    }
}