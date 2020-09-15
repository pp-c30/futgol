"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const asistencia_controller_1 = require("../controlles/asistencia.controller");
let asistenciaController = new asistencia_controller_1.AsistenciaController();
const enrutadorAsistencia = express_1.Router();
enrutadorAsistencia.route('/asistencia').get(asistenciaController.listarAsistencia);
enrutadorAsistencia.route('/asistencia').post();
exports.default = enrutadorAsistencia;
