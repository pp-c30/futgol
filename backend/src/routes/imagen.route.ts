import { Router } from "express";
import  multer  from "../libs/multer";

import { ImagenController } from "../controllers/imagen.controller";

const imagenController = new ImagenController

const enrutadorImagen = Router();

enrutadorImagen.route('/imagen').post(multer.array('img_imagen'),imagenController.guardarImagen);



export default enrutadorImagen;