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
exports.AsistenciaController = void 0;
const database_1 = require("../database");
class AsistenciaController {
    //listado de asistecia (funcionando corectamente)
    listarAsistencia(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //se logra la connexion con la base de datos 
            const db = yield database_1.conexion();
            let asistencia = yield db.query('select *,date_format(fecha_asistencia,"%d/%m/%Y") as fecha_asistencia from asistencia');
            return res.json(asistencia);
        });
    }
    //guardado de asistencia 
    guardarAsistencia(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //conecion con la base de datos 
            const db = yield database_1.conexion();
            let asistencia = req.body;
            yield db.query('insert into asistencia set ?', [asistencia]);
            return res.json('la asistencia fue guardada exitosamente');
        });
    }
    //eliminacion de asistencia 
    eleminarAsistencia(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //conexion con la base de datos 
            const db = yield database_1.conexion();
            let codigo = req.params.codigo_asistencia;
            yield db.query("delete from asistencia where id_asistencia = ?", [codigo]);
            return res.json('la asistencia se elimino correctame');
        });
    }
    //actualizacion de asistencia 
    actualizarAsistencia(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //conexion con la base de datos 
            const db = yield database_1.conexion();
            let codigo = req.params.codigo_asistencia;
            let nuevos_datos_asistencia = req.body;
            yield db.query("update asistencia set ? where id_asistencia = ?", [nuevos_datos_asistencia, codigo]);
            return res.json('se actualizo exitosamente');
        });
    }
    //se optiene solamente una asistencia en particular 
    obtenerUnaAsistencia(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //conexion con la base de datos 
            const db = yield database_1.conexion();
            let codigo = req.params.codigo_asistencia;
            let unaAsistencia = yield db.query("select * from asistencia where id_asistencia = ?", [codigo]);
            return res.json(unaAsistencia[0]);
        });
    }
}
exports.AsistenciaController = AsistenciaController;
