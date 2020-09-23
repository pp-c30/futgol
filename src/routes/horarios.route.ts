import { Router } from "express";
import { HorariosControllers } from "../controllers/HorariosControllers.controllers";

const enrutadorHorarios = Router();

let HorariosController = new HorariosControllers();


//rutas creadasss
enrutadorHorarios.route('/horarios').get(HorariosController.ListarHorarios);

enrutadorHorarios.route('/horarios').post(HorariosController.CrearHorarios);

enrutadorHorarios.route('/horarios/:id').delete(HorariosController.EliminarHorarios);

enrutadorHorarios.route('/horarios/:id').put(HorariosController.ActualizarHorarios);

enrutadorHorarios.route('/horarios/:id').get(HorariosController.ObtenerHorarios);
export default enrutadorHorarios;