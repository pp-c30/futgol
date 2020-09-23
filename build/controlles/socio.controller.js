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
exports.SocioController = void 0;
const database_1 = require("../database");
class SocioController {
    //listado de socios
    listarSocios(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //aca se logra la conexion con la base de datos
            const db = yield database_1.conexion();
            //consulta a la base
            let socio = yield db.query('select * from socio');
            return res.json(socio);
        });
    }
    //guardado de socios
    guardarSocio(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            let socio = req.body;
            yield db.query('insert into socio set ?', [socio]);
            return res.json('El socio fue guardado exitosamente');
        });
    }
    eliminarSocio(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            let id = req.params.id;
            yield db.query("delete from socio where id_socio = ?", [id]);
            return res.json('El socio se elimino correctamente');
        });
    }
    actualizarSocio(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            let codigo = req.params.id;
            let nuevos_datos_socio = req.body;
            yield db.query("update socio set ? where id_socio = ?", [nuevos_datos_socio, codigo]);
            return res.json('Se actualizo exitosamente');
        });
    }
    obtenerUnSocio(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            let codigo = req.params.id;
            let unSocio = yield db.query("select * from socio where id_socio = ?", [codigo]);
            return res.json(unSocio);
        });
    }
}
exports.SocioController = SocioController;
