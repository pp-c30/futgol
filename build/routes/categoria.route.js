"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoria_controller_1 = require("../controllers/categoria.controller");
const enrutadorCategoria = express_1.Router();
let categoriaController = new categoria_controller_1.CategoriaControllers();
//rutas creadas
enrutadorCategoria.route('/categoria_socio').get(categoriaController.listarCategoria);
enrutadorCategoria.route('/categoria_socio').post(categoriaController.crearCategoria);
enrutadorCategoria.route('/categoria_socio/:id').delete(categoriaController.eliminarCategoria);
enrutadorCategoria.route('/categoria_socio/:id').put(categoriaController.actualizarCategoria);
enrutadorCategoria.route('/categoria_socio/:id').get(categoriaController.obtenercategoria);
exports.default = enrutadorCategoria;
