import { Router } from "express";
import  multer    from "../libs/multer";

import { ImagenController } from "../controllers/imagen.controller";

const imagenController = new ImagenController

const enrutadorImagen = Router();

enrutadorImagen.route('/galeria_imagen').post(multer.array('img_imagen'),imagenController.guardarImagen);

enrutadorImagen.route('/galeria_imagen').get(imagenController.listarImagenes); 



export default enrutadorImagen;