"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const index_route_1 = __importDefault(require("./routes/index.route"));
const asistencia_route_1 = __importDefault(require("./routes/asistencia.route"));
const pagos_route_1 = __importDefault(require("./routes/pagos.route"));
const galeria_route_1 = __importDefault(require("./routes/galeria.route"));
const socio_routes_1 = __importDefault(require("./routes/socio.routes"));
const encuentros_routes_1 = __importDefault(require("./routes/encuentros.routes"));
const horarios_route_1 = __importDefault(require("./routes/horarios.route"));
const categoria_route_1 = __importDefault(require("./routes/categoria.route"));
const galeria_route_2 = __importDefault(require("./routes/galeria.route"));
class server {
    constructor() {
        this.app = express_1.default();
        this.configuracion();
        this.middleware();
        this.routes();
    }
    configuracion() {
        this.app.set('port', process.env.port || 3030);
    }
    routes() {
        this.app.use(index_route_1.default);
        this.app.use(asistencia_route_1.default);
        this.app.use(pagos_route_1.default);
        this.app.use(galeria_route_1.default);
        this.app.use(galeria_route_2.default);
        this.app.use(socio_routes_1.default);
        this.app.use(encuentros_routes_1.default);
        this.app.use(horarios_route_1.default);
        this.app.use(categoria_route_1.default);
    }
    middleware() {
        //le permite a nuestro servidor recibir y enviar datos en formato JSON
        this.app.use(express_1.default.json());
        //mustra de las peticiones
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
    }
    // metodo encargado de correr el servidor bajo puerto determinado 
    listen() {
        this.app.listen(this.app.get('port'));
        console.log('servidor corriendo en el puerto 3030');
    }
}
exports.server = server;
