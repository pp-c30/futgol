import express, { Application } from "express";

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
        this.app.set('port', process.env.port || 3000);
    }

    routes()
    {
        this.app.use(enrutadorIndex);
        this.app.use(enrutadorAsistencia);
        this.app.use(enrutadorPagos);
    }

    middleware()
    {
        this.app.use(express.json())
    }

    // metodo encargado de correr el servidor bajo puerto determinado 
    listen()
    {
        this.app.listen(this.app.get('port'));
        console.log('servidor corriendo en el puerto 3000');
    }

}