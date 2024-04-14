const mongoose = require('mongoose');

const connection = async () => {
    try {
        const connection = await mongoose.connect('', {
            autoIndex: true,
            autoCreate: true
        });
        console.log("Database connected")
        return connection;
    } catch (error) {
        console.log(error)
    }
}

module.exports = connection;