import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export function validarToken(req:Request,res:Response,next:NextFunction)
{
    const token:any = req.header('auth-token');
    
    if(!token){
        res.json('Acceso denegado!');
    }

    const datosToken = jwt.verify(token,process.env.TOKEN_SECRET || "1234567");

    console.log(datosToken);

    next();
}