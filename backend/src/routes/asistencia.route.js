"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var asistencia_controller_1 = require("../controllers/asistencia.controller");
var asistenciaController = new asistencia_controller_1.AsistenciaController();
var enrutadorAsistencia = express_1.Router();
enrutadorAsistencia.route('/asistencia').get(asistenciaController.listarAsistencia);
enrutadorAsistencia.route('/asistencia').post(asistenciaController.guardarAsistencia);
enrutadorAsistencia.route('/asistencia/:codigo_asistencia').delete(asistenciaController.eleminarAsistencia);
enrutadorAsistencia.route('/asistencia/:codigo_asistencia').put(asistenciaController.actualizarAsistencia);
enrutadorAsistencia.route('/asistencia/:codigo_asistencia').get(asistenciaController.obtenerUnaAsistencia);
exports.default = enrutadorAsistencia;