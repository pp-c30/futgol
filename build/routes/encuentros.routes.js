"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const EncuentrosControllers_controllers_1 = require("../controllers/EncuentrosControllers.controllers");
const enrutadorEncuentros = express_1.Router();
let EncuentrosController = new EncuentrosControllers_controllers_1.EncuentrosControllers();
//rutas creadas
enrutadorEncuentros.route('/encuentros').get(EncuentrosController.ListarEncuentros);
enrutadorEncuentros.route('/encuentros').post(EncuentrosController.CrearEncuentros);
enrutadorEncuentros.route('/encuentros/:id').delete(EncuentrosController.EliminarEncuentros);
enrutadorEncuentros.route('/encuentros/:id').put(EncuentrosController.ActualizarEncuentros);
enrutadorEncuentros.route('/encuentros/:id').get(EncuentrosController.ObtenerEncuentros);
exports.default = enrutadorEncuentros;
