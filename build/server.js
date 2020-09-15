"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const express_1 = __importDefault(require("express"));
const index_route_1 = __importDefault(require("./routes/index.route"));
const asistecia_route_1 = __importDefault(require("./routes/asistecia.route"));
class server {
    constructor() {
        this.app = express_1.default();
        this.routes();
        this.configuracion();
        this.middleware();
    }
    configuracion() {
        this.app.set('port', process.env.port || 3000);
    }
    routes() {
        this.app.use(index_route_1.default);
        this.app.use(asistecia_route_1.default);
    }
    middleware() {
        this.app.use(express_1.default.json());
    }
    // metodo encargado de correr el servidor bajo puerto determinado 
    listen() {
        this.app.listen(this.app.get('port'));
        console.log('servidor corriendo en el puerto 3000');
    }
}
exports.server = server;
