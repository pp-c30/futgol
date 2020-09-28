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
exports.EncuentrosControllers = void 0;
const database_1 = require("../database");
class EncuentrosControllers {
    listarEncuentros(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //conecto con la base de datos
            const con = yield database_1.conexion();
            let encuentros = yield con.query('select * from encuentros');
            return res.json(encuentros);
        });
    }
    crearEncuentros(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //Recibo datos atravez del POST
            let encuentros = req.body;
            //conecto con la base de datos
            const con = yield database_1.conexion();
            //hago INSERT de un encuentro
            yield con.query('insert into encuentros set ?', [encuentros]);
            return res.json('se ha insertado encuentros');
        });
    }
    eliminarEncuentros(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //recibimo el ID a traves del DELETE
            let id_encuentro_partidos = req.params.id;
            //obtenemos conexion con la base de datos
            let con = yield database_1.conexion();
            yield con.query('delete from encuentros where id_encuentro_partidos= ?', id_encuentro_partidos);
            return res.json('el encuentro se elimino');
        });
    }
    actualizarEncuentros(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //recibo el ID de los encuentros a actualizar
            let id_encuentro_partidos = req.params.id;
            //recibo un JSON con los datos actualizados 
            let encuentros = req.body;
            //se logra la conexion con la base de datos
            let con = yield database_1.conexion();
            yield con.query('update encuentro set ? where id_encuentros_partidos = ? ', [encuentros, id_encuentro_partidos]);
            return res.json('el encuentro se actualizo');
        });
    }
    obtenerEncuentros(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //recibo ID para obtener el encuentro
            let id_encuentro_partidos = req.params.id;
            //se obtiene conexion con base de datos
            let con = yield database_1.conexion();
            //filtro el horario a travez de ID
            let encuentros = yield con.query('select * from horarios where id_encuentro_partidos = ?', [id_encuentro_partidos]);
            //consigo el encuentro de partidos
            return res.json(encuentros[0]);
        });
    }
}
exports.EncuentrosControllers = EncuentrosControllers;
