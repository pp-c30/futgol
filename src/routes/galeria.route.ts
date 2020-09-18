import { Router } from "express";

import { galeriaController } from "../controllers/galeria.controllers";

let GaleriaController = new galeriaController();

const enrutadorGaleria = Router();

enrutadorGaleria.route('/galeria').get(galeriaController.listarGaleria);
enrutadorGaleria.route('/galeria').post(galeriaController.guardarGaleria);
enrutadorGaleria.route('/galeria/:id').delete(galeriaController.eliminarGaleria);
enrutadorGaleria.route('/galeria/:id').put(galeriaController.actualizarGaleria);
enrutadorGaleria.route('/galeria').get(galeriaController.obtenerUnGaleria);
