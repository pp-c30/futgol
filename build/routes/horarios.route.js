"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const HorariosControllers_controllers_1 = require("../controllers/HorariosControllers.controllers");
const enrutadorHorarios = express_1.Router();
let HorariosController = new HorariosControllers_controllers_1.HorariosControllers();
//rutas creadasss
enrutadorHorarios.route('/horarios').get(HorariosController.ListarHorarios);
enrutadorHorarios.route('/horarios').post(HorariosController.CrearHorarios);
enrutadorHorarios.route('/horarios/:id').delete(HorariosController.EliminarHorarios);
enrutadorHorarios.route('/horarios/:id').put(HorariosController.ActualizarHorarios);
enrutadorHorarios.route('/horarios/:id').get(HorariosController.ObtenerHorarios);
exports.default = enrutadorHorarios;
