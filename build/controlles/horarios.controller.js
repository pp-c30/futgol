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
exports.HorariosControllers = void 0;
const database_1 = require("../database");
class HorariosControllers {
    listarHorarios(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //conecto con la base de datos
            const con = yield database_1.conectar();
            let horarios = yield con.query('select * from horarios');
            return res.json(horarios);
        });
    }
    crearHorarios(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //Recibo datos atravez del POST
            let horarios = req.body;
            //conecto con la base de datos
            const con = yield database_1.conectar();
            //hago INSERT de un horario
            yield con.query('insert into horarios set ?', [horarios]);
            return res.json('se ha insertado horarios');
        });
    }
    eliminarHorarios(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //recibimo el ID a traves del DELETE
            let id_horario_entrenamiento = req.params.id;
            //obtenemos conexion con la base de datos
            let con = yield database_1.conectar();
            yield con.query('delete from horarios where id_horario_entrenamiento= ?', id_horario_entrenamiento);
            return res.json('el horario se elimino');
        });
    }
    actualizarHorarios(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //recibo el ID de los horarios a actualizar
            let id_horario_entrenamiento = req.params.id;
            //recibo un JSON con los datos actualizados 
            let horarios = req.body;
            //se logra la conexion con la base de datos
            let con = yield database_1.conectar();
            yield con.query('update horarios set ? where id_horarios_entrenamiento = ? ', [horarios, id_horario_entrenamiento]);
            return res.json('el horario se actualizo');
        });
    }
    obtenerhorarios(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //recibo ID para obtener el horario
            let id_horario_entrenamiento = req.params.id;
            //se obtiene conexion con base de datos
            let con = yield database_1.conectar();
            //filtro el horario a travez de ID
            let horarios = yield con.query('select * from horarios where id_horario_entrenamiento = ?', [id_horario_entrenamiento]);
            //encuentro el horarios
            return res.json(horarios[0]);
        });
    }
}
exports.HorariosControllers = HorariosControllers;
