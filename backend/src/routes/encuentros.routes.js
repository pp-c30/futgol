"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var encuentros_controller_1 = require("../controllers/encuentros.controller");
var enrutadorEncuentros = express_1.Router();
var encuentrosController = new encuentros_controller_1.EncuentrosControllers();
//rutas creadas
enrutadorEncuentros.route('/encuentros').get(encuentrosController.listarEncuentros);
enrutadorEncuentros.route('/encuentros').post(encuentrosController.crearEncuentros);
enrutadorEncuentros.route('/encuentros/:id').delete(encuentrosController.eliminarEncuentros);
enrutadorEncuentros.route('/encuentros/:id').put(encuentrosController.actualizarEncuentros);
enrutadorEncuentros.route('/encuentros/:id').get(encuentrosController.obtenerEncuentros);
exports.default = enrutadorEncuentros;
