import { Router } from "express";
import { EncuentrosControllers } from "../controlles/encuentros.controller";

const enrutadorEncuentros = Router();

let encuentrosController = new EncuentrosControllers();


//rutas creadas
enrutadorEncuentros.route('/encuentros').get(encuentrosController.listarEncuentros);

enrutadorEncuentros.route('/encuentros').post(encuentrosController.crearEncuentros);

enrutadorEncuentros.route('/encuentros/:id').delete(encuentrosController.eliminarEncuentros);

enrutadorEncuentros.route('/encuentros/:id').put(encuentrosController.actualizarEncuentros);

enrutadorEncuentros.route('/encuentros/:id').get(encuentrosController.obtenerEncuentros);
export default enrutadorEncuentros;