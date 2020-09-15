import { conexion } from "../database";

import { Request, Response } from "express";


export class AsistenciaController
{

    public listarAsistencia(req:Request, res:Response)
    {
        return res.json('aca se listaran los pagos');
    }

}