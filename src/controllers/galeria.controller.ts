import {conexion} from '../database';

import { Request, Response, response, request} from "express";

import {Igaleria} from "../models/galeria";

    import { format } from 'morgan';

export class GaleriaController
{
     //listado de galeria
    public async listarGaleria(req:Request,res:Response)
    {
        //aca se logra la conexion con la base de datos
        const db = await conexion();

        //consulta a la base
        let socio = await db.query('select * from galeria');


        return res.json(socio);
        
    }


    //guardado de galeria

    public async guardarGaleria(req:Request,res:Response)
    {

        const db = await conexion();

        let galeria:Igaleria = req.body;

        await db.query('insert into galeria set ?',[galeria]);

        return res.json('La galeria fue guardado exitosamente');
    }

    public async eliminarGalereia(req:Request,res:Response)
{
    const db = await conexion();

    let id = req.params.id;


    await db.query("delete from galeria where id_galeria = ?",[id]);

    return res.json('La galeria se elimino correctamente');

}

public async actualizarGaleria(req:Request,res:Response)
{
    const db = await conexion();

    let codigo = req.params.id;

    let nuevos_datos_galeria = req.body;

    await db.query("update galeria set ? where id_galeria = ?",[nuevos_datos_galeria,codigo]);


    return res.json('Se actualizo exitosamente');

}

public async obtenerUnGaleria(req:Request,res:Response)

{
    const db = await conexion();

    let codigo = req.params.id;

    let unGaleria = await db.query("select * from galeria where id_galeria = ?",[codigo]);

    return res.json(unGaleria);

}

}
