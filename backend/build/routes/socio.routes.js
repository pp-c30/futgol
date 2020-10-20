"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const socio_controller_1 = require("../controllers/socio.controller");
let socioController = new socio_controller_1.SocioController();
const enrutadorSocio = express_1.Router();
enrutadorSocio.route('/socio').get(socioController.listarSocios);
enrutadorSocio.route('/socio').post(socioController.guardarSocio);
enrutadorSocio.route('/socio/:id').delete(socioController.eliminarSocio);
enrutadorSocio.route('/socio/:id').put(socioController.actualizarSocio);
enrutadorSocio.route('/socio').get(socioController.obtenerUnSocio);
exports.default = enrutadorSocio;