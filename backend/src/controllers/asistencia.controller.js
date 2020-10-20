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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsistenciaController = void 0;
var database_1 = require("../database");
var AsistenciaController = /** @class */ (function () {
    function AsistenciaController() {
    }
    //listado de asistecia (funcionando corectamente)
    AsistenciaController.prototype.listarAsistencia = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var db, asistencia;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, database_1.conexion()];
                    case 1:
                        db = _a.sent();
                        return [4 /*yield*/, db.query('select * from asistencia')];
                    case 2:
                        asistencia = _a.sent();
                        return [2 /*return*/, res.json(asistencia)];
                }
            });
        });
    };
    //guardado de asistencia 
    AsistenciaController.prototype.guardarAsistencia = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var db, asistencia;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, database_1.conexion()];
                    case 1:
                        db = _a.sent();
                        asistencia = req.body;
                        return [4 /*yield*/, db.query('insert into asistencia set ?', [asistencia])];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, res.json('la asistencia fue guardada exitosamente')];
                }
            });
        });
    };
    //eliminacion de asistencia 
    AsistenciaController.prototype.eleminarAsistencia = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var db, codigo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, database_1.conexion()];
                    case 1:
                        db = _a.sent();
                        codigo = req.params.codigo_asistencia;
                        return [4 /*yield*/, db.query("delete from asistencia where id_asistencia = ?", [codigo])];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, res.json('la asistencia se elimino correctame')];
                }
            });
        });
    };
    //actualizacion de asistencia 
    AsistenciaController.prototype.actualizarAsistencia = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var db, codigo, nuevos_datos_asistencia;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, database_1.conexion()];
                    case 1:
                        db = _a.sent();
                        codigo = req.params.codigo_asistencia;
                        nuevos_datos_asistencia = req.body;
                        return [4 /*yield*/, db.query("update asistencia set ? where id_asistencia = ?", [nuevos_datos_asistencia, codigo])];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, res.json('se actualizo exitosamente')];
                }
            });
        });
    };
    //se optiene solamente una asistencia en particular 
    AsistenciaController.prototype.obtenerUnaAsistencia = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var db, codigo, unaAsistencia;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, database_1.conexion()];
                    case 1:
                        db = _a.sent();
                        codigo = req.params.codigo_asistencia;
                        return [4 /*yield*/, db.query("select * from asistencia where id_asistencia = ?", [codigo])];
                    case 2:
                        unaAsistencia = _a.sent();
                        return [2 /*return*/, res.json(unaAsistencia[0])];
                }
            });
        });
    };
    return AsistenciaController;
}());
exports.AsistenciaController = AsistenciaController;
