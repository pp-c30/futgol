import { conexion } from "../database";

import { Request, Response, Router } from "express";

import { Ipagos } from "../models/pagos";

export class pagosController
{
    //listado de pago 
    public async listarPagos(req:Request, res:Response)
    {
          //se logra la connexion con la base de datos 
          const db = await conexion();

          let pagos = await db.query('selec * from pagos');
  
          return res.json(pagos);
  
    }


    //guardado de pagos
    public async guardarpagos(req:Request, res:Response)
    {
        //conecion con la base de datos 
        const db = await conexion();

        let pagos:Ipagos = req.body;

        await db.query('insert into pagos set ?',[pagos]);

        return res.json('el pago fue guardada exitosamente');



    }


    //eliminacion de pagos 
    public async eleminarPagos(req:Request, res:Response)
    {
        //conexion con la base de datos 
        const db = await conexion();

        let codigo = req.params.codigo_pagos;
        
        await db.query("delete from pagos where id_pagos = ?",[codigo]);

        return res.json('el pago se elimino correctame');

    }

    //actualizacion de pagos
    public async actualizarPagos (req:Request, res:Response)
    {
        //conexion con la base de datos 
        const db = await conexion();
        
        let codigo = req.params.codigo_pagos;
        let nuevos_datos_pagos = req.body;

        await db.query("update pagos set ? where id_pagos = ?",[nuevos_datos_pagos,codigo]);

        return res.json('se actualizo exitosamente')
    }

    //se optiene solamente un pago en particular 
    public async obtenerUnPagos (req:Request, res:Response)
    {
        //conexion con la base de datos 
        const db = await conexion();

        let codigo = req.params.codigo_pagos;

        let unaPago = await db.query("selec * from pagos where id_pagos = ?",[codigo]);
    
        return res.json(unaPago[0]);

    }
} 