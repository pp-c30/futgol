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
exports.GaleriaController = void 0;
const database_1 = require("../database");
class GaleriaController {
    //listado de galeria
    listarGaleria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //aca se logra la conexion con la base de datos
            const db = yield database_1.conexion();
            //consulta a la base
            let socio = yield db.query('select * from galeria');
            return res.json(socio);
        });
    }
    //guardado de galeria
    guardarGaleria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            let galeria = req.body;
            yield db.query('insert into galeria set ?', [galeria]);
            return res.json('La galeria fue guardado exitosamente');
        });
    }
    eliminarGaleria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //conexion con la base de datos 
            const db = yield database_1.conexion();
            let codigo = req.params.codigo_galeria;
            yield db.query("delete from galeria where id_galeria = ?", [codigo]);
            return res.json('la imagen se elimino correctame');
        });
    }
    actualizarGaleria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            let codigo = req.params.codigo_galeria;
            let nuevos_datos_galeria = req.body;
            yield db.query("update galeria set ? where id_galeria = ?", [nuevos_datos_galeria, codigo]);
            return res.json('Se actualizo exitosamente');
        });
    }
    obtenerUnGaleria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //conexion con la base de datos 
            const db = yield database_1.conexion();
            let codigo = req.params.codigo_galeria;
            let unaGaleria = yield db.query("select * from galeria where id_galeria = ?", [codigo]);
            return res.json(unaGaleria[0]);
        });
    }
}
exports.GaleriaController = GaleriaController;
