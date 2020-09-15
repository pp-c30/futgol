import { createPool } from "promise-mysql";

export async function conexion()
{
    const conexion = await createPool({
        host:'localhost',
        user:'root',
        password:'',
        database:'Futgol'
    });

    return conexion;
}