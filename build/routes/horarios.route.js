"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const horarios_controller_1 = require("../controlles/horarios.controller");
const enrutadorHorarios = express_1.Router();
let horariosController = new horarios_controller_1.HorariosControllers();
//rutas creadasss
enrutadorHorarios.route('/horarios').get(horariosController.listarHorarios);
enrutadorHorarios.route('/horarios').post(horariosController.crearHorarios);
enrutadorHorarios.route('/horarios/:id').delete(horariosController.eliminarHorarios);
enrutadorHorarios.route('/horarios/:id').put(horariosController.actualizarHorarios);
enrutadorHorarios.route('/horarios/:id').get(horariosController.obtenerhorarios);
exports.default = enrutadorHorarios;
