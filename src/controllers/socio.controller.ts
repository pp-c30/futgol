import {conexion} from '../database';

import { Request, Response, response, request} from "express";

import {Isocio} from "../models/socio";

    import { format } from 'morgan';

export class SocioController
{
     //listado de socios
    public async listarSocios(req:Request,res:Response)
    {
        //aca se logra la conexion con la base de datos
        const db = await conexion();

        //consulta a la base
        let socio = await db.query('select * from socio');


        return res.json(socio);
        
    }


    //guardado de socios

    public async guardarSocio(req:Request,res:Response)
    {

        const db = await conexion();

        let socio:Isocio = req.body;

        await db.query('insert into socio set ?',[socio]);

        return res.json('El socio fue guardado exitosamente');
    }

    public async eliminarSocio(req:Request,res:Response)
{
    const db = await conexion();

    let id = req.params.id;


    await db.query("delete from socio where id_socio = ?",[id]);

    return res.json('El socio se elimino correctamente');

}

public async actualizarSocio(req:Request,res:Response)
{
    const db = await conexion();

    let codigo = req.params.id;

    let nuevos_datos_socio = req.body;

    await db.query("update socio set ? where id_socio = ?",[nuevos_datos_socio,codigo]);


    return res.json('Se actualizo exitosamente');

}

public async obtenerUnSocio(req:Request,res:Response)

{
    const db = await conexion();

    let codigo = req.params.id;

    let unSocio = await db.query("select * from socio where id_socio = ?",[codigo]);

    return res.json(unSocio);

}

}
