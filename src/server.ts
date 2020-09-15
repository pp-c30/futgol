import express, { Application } from "express";

export class server {

    app:Application;

    constructor()
    {
        this.app = express()
        
    }

    // motodo encargado de correr el servidor bajo puerto determinado 
    listen()
    {
        this.app.listen(3000)
        console.log('servidor corriendo en el puerto 3000');
    }

}