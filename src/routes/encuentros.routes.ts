import { Router } from "express";
import { EncuentrosControllers } from "../controllers/EncuentrosControllers.controllers";

const enrutadorEncuentros = Router();

let EncuentrosController = new EncuentrosControllers();


//rutas creadas
enrutadorEncuentros.route('/encuentros').get(EncuentrosController.ListarEncuentros);

enrutadorEncuentros.route('/encuentros').post(EncuentrosController.CrearEncuentros);

enrutadorEncuentros.route('/encuentros/:id').delete(EncuentrosController.EliminarEncuentros);

enrutadorEncuentros.route('/encuentros/:id').put(EncuentrosController.ActualizarEncuentros);

enrutadorEncuentros.route('/encuentros/:id').get(EncuentrosController.ObtenerEncuentros);
export default enrutadorEncuentros;