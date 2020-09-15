"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const express_1 = __importDefault(require("express"));
class server {
    constructor() {
        this.app = express_1.default();
    }
    // motodo encargado de correr el servidor bajo puerto determinado 
    listen() {
        this.app.listen(3000);
        console.log('servidor corriendo en el puerto 3000');
    }
}
exports.server = server;
