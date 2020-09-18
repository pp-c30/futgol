import { Router } from "express";

import { socioController } from "../controllers/socio.controllers";

let SocioController = new socioController();

const enrutadorSocio = Router();

enrutadorSocio.route('/socio').get(socioController.listarSocio);
enrutadorSocio.route('/socio').post(socioController.guardarSocio);
enrutadorSocio.route('/socio/:id').delete(socioController.eliminarSocio);
enrutadorSocio.route('/socio/:id').put(socioController.actualizarSocio);
enrutadorSocio.route('/socio').get(socioController.obtenerUnSocio);
