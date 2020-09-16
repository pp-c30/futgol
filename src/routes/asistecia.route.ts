import { Router } from "express";

import { AsistenciaController } from "../controlles/asistencia.controller";

let asistenciaController = new AsistenciaController();

const enrutadorAsistencia = Router();

enrutadorAsistencia.route('/asistencia').get(asistenciaController.listarAsistencia);
enrutadorAsistencia.route('/asistencia').post(asistenciaController.guardarAsistencia);
enrutadorAsistencia.route('/asistencia/:codigo_asistencia').delete(asistenciaController.eleminarAsistencia);
enrutadorAsistencia.route('/asistencia/codigo_asistencia').put(asistenciaController.actualizarAsistencia);
enrutadorAsistencia.route('/asistencia/codigo_asistencia').get(asistenciaController.obtenerUnaAsistencia);

export default enrutadorAsistencia;