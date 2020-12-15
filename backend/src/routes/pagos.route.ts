import { Router } from "express";

import { PagosController } from "../controllers/pagos.controller";

import { validarToken } from "../controllers/libs/verificarToken";

let pagosController = new PagosController();

const enrutadorPagos = Router();

enrutadorPagos.route('/pagos/:id_socio').get(validarToken,pagosController.listarPagos);
enrutadorPagos.route('/pagos').post(pagosController.guardarpagos);
enrutadorPagos.route('/pagos/:codigo_pagos').delete(pagosController.eleminarPagos);
enrutadorPagos.route('/pagos/:codigo_pagos').put(pagosController.actualizarPagos);
enrutadorPagos.route('/pagos/:codigo_pagos').get(pagosController.listarPagos);


export default enrutadorPagos;