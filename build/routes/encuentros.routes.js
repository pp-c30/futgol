"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const encuentros_controller_1 = require("../controlles/encuentros.controller");
const enrutadorEncuentros = express_1.Router();
let encuentrosController = new encuentros_controller_1.EncuentrosControllers();
//rutas creadas
enrutadorEncuentros.route('/encuentros').get(encuentrosController.listarEncuentros);
enrutadorEncuentros.route('/encuentros').post(encuentrosController.crearEncuentros);
enrutadorEncuentros.route('/encuentros/:id').delete(encuentrosController.eliminarEncuentros);
enrutadorEncuentros.route('/encuentros/:id').put(encuentrosController.actualizarEncuentros);
enrutadorEncuentros.route('/encuentros/:id').get(encuentrosController.obtenerEncuentros);
exports.default = enrutadorEncuentros;
