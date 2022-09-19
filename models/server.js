const express = require('express');
require('dotenv').config();
var cors = require('cors');

class Server {


    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        


        //Middlewares
        this.middlewares();
        // rutas
        this.routes();
    }

    routes(){
       
        this.app.use('/api/users', require('../routes/users'));

    }

    listen(){
        this.app.listen(this.port);
        console.log(`Server started in localhost::${this.port}`);
    }

    middlewares(){
        // cors
        this.app.use(cors());

        // lectura de datos del body
        this.app.use(express.json());

        this.app.use(express.static('public'));

    }
}

module.exports= Server;