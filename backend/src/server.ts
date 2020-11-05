import express, { Application } from "express";

import morgan  from "morgan";

import cors  from "cors";

import enrutadorIndex from "./routes/index.route";

import enrutadorAsistencia  from "./routes/asistencia.route";

import  enrutadorPagos  from "./routes/pagos.route";

import enrutadorGaleria from "./routes/galeria.route";

import enrutadorSocio from "./routes/socio.routes";

import enrutadorEncuentros from "./routes/encuentros.routes";

import enrutadorHorarios from "./routes/horarios.route";

import enrutadorCategoria from "./routes/categoria.route";

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
        this.app.use(enrutadorGaleria);
        this.app.use(enrutadorSocio);
        this.app.use(enrutadorEncuentros);
        this.app.use(enrutadorHorarios);
        this.app.use(enrutadorCategoria);

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