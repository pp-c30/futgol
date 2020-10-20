"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("./server");
function principal() {
    //se crea instancia de la clase   
    var servidor = new server_1.server();
    servidor.listen();
}
//invoco la funcion principal()
principal();
