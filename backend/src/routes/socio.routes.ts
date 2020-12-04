import { Router } from "express";

import { SocioController } from "../controllers/socio.controller";

let socioController = new SocioController();

const enrutadorSocio = Router();

enrutadorSocio.route('/socios').get(socioController.listarSocios);
enrutadorSocio.route('/socios').post(socioController.guardarSocio);
enrutadorSocio.route('/socios/:id').delete(socioController.eliminarSocio);
enrutadorSocio.route('/socios/:id').put(socioController.actualizarSocio);
enrutadorSocio.route('/socios').get(socioController.obtenerUnSocio);

export default enrutadorSocio;