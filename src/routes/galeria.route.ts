import { Router } from "express";

import { GaleriaController } from "../controllers/galeria.controller";

let galeriaController = new GaleriaController();

const enrutadorGaleria = Router();

enrutadorGaleria.route('/galeria').get(galeriaController.listarGaleria);
enrutadorGaleria.route('/galeria').post(galeriaController.guardarGaleria);
enrutadorGaleria.route('/galeria/:id').delete(galeriaController.eliminarGalereia);
enrutadorGaleria.route('/galeria/:id').put(galeriaController.actualizarGaleria);
enrutadorGaleria.route('/galeria').get(galeriaController.obtenerUnGaleria);

export default enrutadorGaleria;