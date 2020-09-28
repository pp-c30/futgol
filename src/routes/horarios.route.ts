import { Router } from "express";
import { HorariosControllers } from "../controllers/horarios.controller";

const enrutadorHorarios = Router();

let horariosController = new HorariosControllers();


//rutas creadasss
enrutadorHorarios.route('/horarios').get(horariosController.listarHorarios);

enrutadorHorarios.route('/horarios').post(horariosController.crearHorarios);

enrutadorHorarios.route('/horarios/:id').delete(horariosController.eliminarHorarios);

enrutadorHorarios.route('/horarios/:id').put(horariosController.actualizarHorarios);

enrutadorHorarios.route('/horarios/:id').get(horariosController.obtenerhorarios);
export default enrutadorHorarios;