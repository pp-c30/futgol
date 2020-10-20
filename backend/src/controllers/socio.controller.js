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
exports.SocioController = void 0;
var database_1 = require("../database");
var SocioController = /** @class */ (function () {
    function SocioController() {
    }
    //listado de socios
    SocioController.prototype.listarSocios = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var db, socio;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, database_1.conexion()];
                    case 1:
                        db = _a.sent();
                        return [4 /*yield*/, db.query('select * from socio')];
                    case 2:
                        socio = _a.sent();
                        return [2 /*return*/, res.json(socio)];
                }
            });
        });
    };
    //guardado de socios
    SocioController.prototype.guardarSocio = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var db, socio;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, database_1.conexion()];
                    case 1:
                        db = _a.sent();
                        socio = req.body;
                        return [4 /*yield*/, db.query('insert into socio set ?', [socio])];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, res.json('El socio fue guardado exitosamente')];
                }
            });
        });
    };
    SocioController.prototype.eliminarSocio = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var db, id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, database_1.conexion()];
                    case 1:
                        db = _a.sent();
                        id = req.params.id;
                        return [4 /*yield*/, db.query("delete from socio where id_socio = ?", [id])];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, res.json('El socio se elimino correctamente')];
                }
            });
        });
    };
    SocioController.prototype.actualizarSocio = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var db, codigo, nuevos_datos_socio;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, database_1.conexion()];
                    case 1:
                        db = _a.sent();
                        codigo = req.params.id;
                        nuevos_datos_socio = req.body;
                        return [4 /*yield*/, db.query("update socio set ? where id_socio = ?", [nuevos_datos_socio, codigo])];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, res.json('Se actualizo exitosamente')];
                }
            });
        });
    };
    SocioController.prototype.obtenerUnSocio = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var db, codigo, unSocio;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, database_1.conexion()];
                    case 1:
                        db = _a.sent();
                        codigo = req.params.id;
                        return [4 /*yield*/, db.query("select * from socio where id_socio = ?", [codigo])];
                    case 2:
                        unSocio = _a.sent();
                        return [2 /*return*/, res.json(unSocio)];
                }
            });
        });
    };
    return SocioController;
}());
exports.SocioController = SocioController;
