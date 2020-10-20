import { Router } from "express";

import { SocioController } from "../controllers/socio.controller";

let socioController = new SocioController();

const enrutadorSocio = Router();

enrutadorSocio.route('/socio').get(socioController.listarSocios);
enrutadorSocio.route('/socio').post(socioController.guardarSocio);
enrutadorSocio.route('/socio/:id').delete(socioController.eliminarSocio);
enrutadorSocio.route('/socio/:id').put(socioController.actualizarSocio);
enrutadorSocio.route('/socio').get(socioController.obtenerUnSocio);

export default enrutadorSocio;