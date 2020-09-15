"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
function principal() {
    //se crea instancia de la clase   
    const servidor = new server_1.server();
    servidor.listen();
}
//invoco la funcion principal()
principal();
