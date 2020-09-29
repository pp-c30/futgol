import { Router } from "express";
import { CategoriaControllers } from "../controllers/categoria.controller";

const enrutadorCategoria = Router();

let categoriaController = new CategoriaControllers();


//rutas creadas
enrutadorCategoria.route('/categoria').get(categoriaController.listarCategoria);

enrutadorCategoria.route('/categoria').post(categoriaController.crearCategoria);

enrutadorCategoria.route('/categoria/:id').delete(categoriaController.eliminarCategoria);

enrutadorCategoria.route('/categoria/:id').put(categoriaController.actualizarCategoria);

enrutadorCategoria.route('/categoria/:id').get(categoriaController.obtenercategoria);
export default enrutadorCategoria;