import { server } from "./server";


function principal ()
{
    //se crea instancia de la clase   
    const servidor = new server();
    servidor.listen();
}


//invoco la funcion principal()
principal();