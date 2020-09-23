"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const socio_controllers_1 = require("../controllers/socio.controllers");
let SocioController = new socio_controllers_1.socioController();
const enrutadorSocio = express_1.Router();
enrutadorSocio.route('/socio').get(socio_controllers_1.socioController.listarSocio);
enrutadorSocio.route('/socio').post(socio_controllers_1.socioController.guardarSocio);
enrutadorSocio.route('/socio/:id').delete(socio_controllers_1.socioController.eliminarSocio);
enrutadorSocio.route('/socio/:id').put(socio_controllers_1.socioController.actualizarSocio);
enrutadorSocio.route('/socio').get(socio_controllers_1.socioController.obtenerUnSocio);