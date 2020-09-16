import { conexion } from "../database";

import { Request, Response } from "express";

import { Iasistecia } from "../models/asistencia";

export class AsistenciaController
{
    //listado de asistecia (funcionando corectamente)
    public async listarAsistencia(req:Request, res:Response)
    {
        //se logra la connexion con la base de datos 
        const db = await conexion();

        let asistecia = await db.query('selec * from asistecia');

        return res.json(asistecia);

    }


    //guardado de pagos (no no funciona todavia)
    public async guardarAsistencia(req:Request, res:Response)
    {
        const db = await conexion();

        let asistecia:Iasistecia = req.body;

        await db.query("insert into asistencia set ?",[asistecia]);

        return res.json('la asistencia fue guardada exitosamente');



    }

} 