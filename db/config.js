const mongoose = require("mongoose");

const dbConnection = async() => {

    try {
        await mongoose.connect(process.env.BD_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('BD online');

    }catch(error) {
        console.log(error);
        throw new Error('Error a la hora de inicializar la BD');
    }
}

module.exports = {
    dbConnection
}