import { Router } from "express";
import { CategoriaControllers } from "../controllers/categoria.controller";

const enrutadorCategoria = Router();

let categoriaController = new CategoriaControllers();


//rutas creadas
enrutadorCategoria.route('/categoria_socio').get(categoriaController.listarCategoria);

enrutadorCategoria.route('/categoria_socio').post(categoriaController.crearCategoria);

enrutadorCategoria.route('/categoria_socio/:id').delete(categoriaController.eliminarCategoria);

enrutadorCategoria.route('/categoria_socio/:id').put(categoriaController.actualizarCategoria);

enrutadorCategoria.route('/categoria_socio/:id').get(categoriaController.obtenercategoria);
export default enrutadorCategoria;