import { Request, Response } from "express";
import { conexion } from "../database";

import  fs  from "fs-extra";

import cloudinary from "cloudinary";



export class ImagenController {

async listarImagenes(req:Request,res:Response)
{

    const db = await conexion();
    
    let imagenes = await db.query('selec * from galeria_imagenes');

    res.json(imagenes);
}

    public async guardarImagen(req:Request,res:Response)
    {
        //se accede a los archivos recibidos
        const files:any = req.files;

        const ig = req.body.id_galeria;
        const iurl = req.body.imagen_url;
        const puid = req.body.public_id;
        const pd = req.body.portada;


        const db = await conexion();


       const unaGaleria = {
            titulo_imagen:req.body.titulo_imagen,
            categoria:req.body.categoria,
            estado:req.body.estado
        }

        const resultado = await db.query('insert into galeria set ?',[unaGaleria]);

        for(let i=0; i < files.length; i++){

            //le espicificamos el path (la ruta) de la imagen guardada en la carpeta uploads
          const resultado_cloudinary = await cloudinary.v2.uploader.upload(files[i].path)

            const imagen_galeria = {
                id_galeria:resultado.insertId,
                imagen_url:resultado_cloudinary.url,
                public_id:resultado_cloudinary.public_id
            
                
            }

           await db.query('insert into galeria_imagenes set?',[imagen_galeria])

           await fs.unlink(files[i].path);
        }
        res.json('se inserto exitosamente');
    }
}