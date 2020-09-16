import { conexion } from "../database";

import { Request, Response, Router } from "express";

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


    //guardado de asistencia (no funciona todavia)
    public async guardarAsistencia(req:Request, res:Response)
    {
        //conecion con la base de datos 
        const db = await conexion();

        let asistecia:Iasistecia = req.body;

        await db.query('insert into asistencia set ?',[asistecia]);

        return res.json('la asistencia fue guardada exitosamente');



    }


    //eliminacion de asistencia 
    public async eleminarAsistencia(req:Request, res:Response)
    {
        //conexion con la base de datos 
        const db = await conexion();

        let codigo = req.params.codigo_asistencia;
        
        await db.query("delete from asistencia where id_asistencia = ?",[codigo]);

        return res.json('la asistencia se elimino correctame');

    }

    //actualizacion de asistencia 
    public async actualizarAsistencia (req:Request, res:Response)
    {
        //conexion con la base de datos 
        const db = await conexion();
        
        let codigo = req.params.codigo_asistencia;
        let nuevos_datos_asistencia = req.body;

        await db.query("update asistencia set ? where id_asistencia = ?",[nuevos_datos_asistencia,codigo]);

        return res.json('se actualizo exitosamente')
    }

    //se optiene solamente una asistencia en particular 
    public async obtenerUnaAsistencia (req:Request, res:Response)
    {
        //conexion con la base de datos 
        const db = await conexion();

        let codigo = req.params.codigo_asistencia;

        let unaAsistencia = await db.query("selec * from asistencia where id_asistencia = ?",[codigo]);
    
        return res.json(unaAsistencia[0]);

    }
} 