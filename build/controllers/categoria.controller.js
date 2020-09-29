"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriaControllers = void 0;
const database_1 = require("../database");
class CategoriaControllers {
    listarCategoria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //conecto con la base de datos
            const con = yield database_1.conexion();
            let categoria = yield con.query('select * from categoria_socio');
            return res.json(categoria);
        });
    }
    crearCategoria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //Recibo datos atravez del POST
            let categoria_socio = req.body;
            //conecto con la base de datos
            const con = yield database_1.conexion();
            //hago INSERT de una categoria
            yield con.query('insert into categoria_socio set ?', [categoria_socio]);
            return res.json('se ha insertado categoria');
        });
    }
    eliminarCategoria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //obtenemos conexion con la base de datos
            const db = yield database_1.conexion();
            let codigo = req.params.codigo_categoria_socio;
            yield db.query('delete from categoria_socio where id_categoria_socio = ?', [codigo]);
            return res.json('la categoria se elimino');
        });
    }
    actualizarCategoria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //recibo el ID de las categorias a actualizar
            let id_categoria_socio = req.params.id;
            //recibo un JSON con los datos actualizados 
            let categoria = req.body;
            //se logra la conexion con la base de datos
            let con = yield database_1.conexion();
            yield con.query('update categoria_socio set ? where id_categoria_socio = ? ', [categoria, id_categoria_socio]);
            return res.json('la categoria se actualizo');
        });
    }
    obtenercategoria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //recibo ID para obtener la categoria
            let id_categoria_socio = req.params.id;
            //se obtiene conexion con base de datos
            let con = yield database_1.conexion();
            //filtro la categoria a travez de ID
            let categoria = yield con.query('select * from categoria_socio where id_categoria_socio = ?', [id_categoria_socio]);
            //consigo la categoria
            return res.json(categoria[0]);
        });
    }
}
exports.CategoriaControllers = CategoriaControllers;
