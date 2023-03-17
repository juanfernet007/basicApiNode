const express = require('express')
const cors = require('cors');
const { dbConnection } = require('../database/config')

class Server {

    constructor() {
        this.app = express()
        this.port = process.env.PORT
        this.usuariosPath = '/api/usuarios';

        //conectar BD
        this.connectBD();


        //Middlewares
        this.middlewares()

        //Rutas de mi aplicación
        this.routes()

    }

    async connectBD () {
        await dbConnection();
    }

    middlewares() {
        
        //cors
        this.app.use( cors() );

        //recibir tipo json
        this.app.use( express.json() );

        //directorio publico
        this.app.use( express.static('public') );

    }

    routes() {

        this.app.use(this.usuariosPath, require('../routes/usuarios'));

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Escuchando por el puerto: %s', this.port)
        });
    }

}

module.exports = Server