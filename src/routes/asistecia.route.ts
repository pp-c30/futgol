import { Router } from "express";

import { AsistenciaController } from "../controlles/asistencia.controller";

let asistenciaController = new AsistenciaController();

const enrutadorAsistencia = Router();

enrutadorAsistencia.route('/asistencia').get(asistenciaController.listarAsistencia);
enrutadorAsistencia.route('/asistencia').post(asistenciaController.guardarAsistencia);

export default enrutadorAsistencia;