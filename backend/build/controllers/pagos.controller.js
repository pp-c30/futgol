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
exports.PagosController = void 0;
const database_1 = require("../database");
class PagosController {
    //listado de pago 
    listarPagos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //se logra la connexion con la base de datos 
            const db = yield database_1.conexion();
            let pagos = yield db.query('select * from pagos');
            return res.json(pagos);
        });
    }
    //guardado de pagos
    guardarpagos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //conecion con la base de datos 
            const db = yield database_1.conexion();
            let pagos = req.body;
            yield db.query('insert into pagos set ?', [pagos]);
            return res.json('el pago fue guardada exitosamente');
        });
    }
    //eliminacion de pagos 
    eleminarPagos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //conexion con la base de datos 
            const db = yield database_1.conexion();
            let codigo = req.params.codigo_pagos;
            yield db.query("delete from pagos where id_pagos = ?", [codigo]);
            return res.json('el pago se elimino correctame');
        });
    }
    //actualizacion de pagos
    actualizarPagos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //conexion con la base de datos 
            const db = yield database_1.conexion();
            let codigo = req.params.codigo_pagos;
            let nuevos_datos_pagos = req.body;
            yield db.query("update pagos set ? where id_pagos = ?", [nuevos_datos_pagos, codigo]);
            return res.json('se actualizo exitosamente');
        });
    }
    //se optiene solamente un pago en particular 
    obtenerUnPagos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //conexion con la base de datos 
            const db = yield database_1.conexion();
            let codigo = req.params.codigo_pagos;
            let unaPago = yield db.query("select * from pagos where id_pagos = ?", [codigo]);
            return res.json(unaPago[0]);
        });
    }
}
exports.PagosController = PagosController;
