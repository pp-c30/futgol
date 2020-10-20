"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var socio_controller_1 = require("../controllers/socio.controller");
var socioController = new socio_controller_1.SocioController();
var enrutadorSocio = express_1.Router();
enrutadorSocio.route('/socio').get(socioController.listarSocios);
enrutadorSocio.route('/socio').post(socioController.guardarSocio);
enrutadorSocio.route('/socio/:id').delete(socioController.eliminarSocio);
enrutadorSocio.route('/socio/:id').put(socioController.actualizarSocio);
enrutadorSocio.route('/socio').get(socioController.obtenerUnSocio);
exports.default = enrutadorSocio;
