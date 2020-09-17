import { Router } from "express";

import { pagosController } from "../controlles/pagos.controller";

let PagosController = new pagosController();

const enrutadorPagos = Router();

enrutadorPagos.route('/pagos').get(PagosController.listarPagos);
enrutadorPagos.route('/pagos').post(PagosController.guardarpagos);
enrutadorPagos.route('/pagos/:codigo_pagos').delete(PagosController.eleminarPagos);
enrutadorPagos.route('/pagos/codigo_pagos').put(PagosController.actualizarPagos);
enrutadorPagos.route('/pagos/codigo_pagos').get(PagosController.listarPagos);

export default enrutadorPagos;