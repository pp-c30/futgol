"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var index_route_1 = __importDefault(require("./routes/index.route"));
var asistencia_route_1 = __importDefault(require("./routes/asistencia.route"));
var pagos_route_1 = __importDefault(require("./routes/pagos.route"));
var galeria_route_1 = __importDefault(require("./routes/galeria.route"));
var socio_routes_1 = __importDefault(require("./routes/socio.routes"));
var encuentros_routes_1 = __importDefault(require("./routes/encuentros.routes"));
var horarios_route_1 = __importDefault(require("./routes/horarios.route"));
var categoria_route_1 = __importDefault(require("./routes/categoria.route"));
var server = /** @class */ (function () {
    function server() {
        this.app = express_1.default();
        this.configuracion();
        this.middleware();
        this.routes();
    }
    server.prototype.configuracion = function () {
        this.app.set('port', process.env.port || 3010);
    };
    server.prototype.routes = function () {
        this.app.use(index_route_1.default);
        this.app.use(asistencia_route_1.default);
        this.app.use(pagos_route_1.default);
        this.app.use(galeria_route_1.default);
        this.app.use(socio_routes_1.default);
        this.app.use(encuentros_routes_1.default);
        this.app.use(horarios_route_1.default);
        this.app.use(categoria_route_1.default);
    };
    server.prototype.middleware = function () {
        //le permite a nuestro servidor recibir y enviar datos en formato JSON
        this.app.use(express_1.default.json());
        //mustra de las peticiones
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
    };
    // metodo encargado de correr el servidor bajo puerto determinado 
    server.prototype.listen = function () {
        this.app.listen(this.app.get('port'));
        console.log('servidor corriendo en el puerto 3010');
    };
    return server;
}());
exports.server = server;
