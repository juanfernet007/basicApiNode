const mongoose = require('mongoose');

const dbConnection = async () => {
    
    try {
        
        await mongoose.connect(process.env.MONGOBD_CNN)

    } catch (error) {
        console.log(error)
        throw new Error('Ocurrió un error al intentar conectarse a la base de datos')
    }

    console.log('Base de datos online');

}


module.exports = {
    dbConnection
}