import { Router } from "express";

import { GaleriaController } from "../controllers/galeria.controller";

let galeriaController = new GaleriaController();

const enrutadorGaleria = Router();

enrutadorGaleria.route('/galeria').get(galeriaController.listarGaleria);
enrutadorGaleria.route('/galeria').post(galeriaController.guardarGaleria);
enrutadorGaleria.route('/galeria/:codigo_galeria').delete(galeriaController.eliminarGaleria);
enrutadorGaleria.route('/galeria/:codigo_galeria').put(galeriaController.actualizarGaleria);
enrutadorGaleria.route('/galeria/:codigo_galeria').get(galeriaController.obtenerUnGaleria);

export default enrutadorGaleria;