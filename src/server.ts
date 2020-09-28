import express, { Application } from "express";

import morgan  from "morgan";

import cors  from "cors";

import enrutadorIndex from "./routes/index.route";

import enrutadorAsistencia  from "./routes/asistecia.route";

import  enrutadorPagos  from "./routes/pagos.route";

export class server {

    app:Application;

    constructor()
    {
        this.app = express();
        this.configuracion();
        this.middleware();
        this.routes();
        
        
    }

    configuracion()
    {
        this.app.set('port', process.env.port || 3020);
    }

    routes()
    {
        this.app.use(enrutadorIndex);
        this.app.use(enrutadorAsistencia);
        this.app.use(enrutadorPagos);
    }

    middleware()
    {
        //le permite a nuestro servidor recibir y enviar datos en formato JSON
        this.app.use(express.json());

        //mustra de las peticiones
        this.app.use(morgan('dev'));

        this.app.use(cors());

        

    }

    // metodo encargado de correr el servidor bajo puerto determinado 
    listen()
    {
        this.app.listen(this.app.get('port'));
        console.log('servidor corriendo en el puerto 3020');
    }

}