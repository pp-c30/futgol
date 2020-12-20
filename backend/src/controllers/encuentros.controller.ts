import { Response,Request } from "express";
import { conexion } from "../database";
import { Iencuentro } from "../models/encuentros";

export class EncuentrosControllers
{
    public async listarEncuentros(req:Request,res:Response)
    {
        //conecto con la base de datos
        const con= await conexion();

        let encuentros = await con.query('select *,date_format(fecha_hora,"%d/%m/%Y %H:%i:%s") as fecha_hora, (select descripcion from categoria_socio where id_encuentro_partidos = e.categoria) as categoria from encuentro_partidos e');

        return res.json(encuentros);
    }

    public async crearEncuentros(req:Request, res:Response)
    {
        //Recibo datos atravez del POST
        let encuentros:Iencuentro = req.body;

        //conecto con la base de datos
        const con = await conexion();

        //hago INSERT de un encuentro
        await con.query('insert into encuentro_partidos set ?', [encuentros]);

        return res.json('se ha insertado encuentros');
    }

    public async eliminarEncuentros(req:Request,res:Response)
    {
        //recibimo el ID a traves del DELETE
        let id_encuentro_partidos = req.params.id;

        //obtenemos conexion con la base de datos
        let con = await conexion();

        await con.query('delete from encuentro_partidos where id_encuentro_partidos= ?',[id_encuentro_partidos]);

        return res.json('el encuentro se elimino');
    }

    public async actualizarEncuentros(req:Request,res:Response)
    {
         //recibo el ID de los encuentros a actualizar
        let id_encuentro_partidos = req.params.id;

        //recibo un JSON con los datos actualizados 
        let encuentros = req.body;

        //se logra la conexion con la base de datos
        let con = await conexion();

        await con.query('update encuentro_partidos set ? where id_encuentro_partidos = ? ', [encuentros,id_encuentro_partidos]);

        return res.json('el encuentro se actualizo');
    }

    public async obtenerEncuentros(req:Request,res:Response)
    {
        //recibo ID para obtener el encuentro
        let id_encuentro_partidos = req.params.id;
        
        //se obtiene conexion con base de datos
        let con = await conexion();
        
        //filtro el encuentro a travez de ID
        let encuentros = await con.query('select * from encuentro_partidos where id_encuentro_partidos = ?' ,[id_encuentro_partidos]);
        
        //consigo el encuentro de partidos
        return res.json(encuentros[0]);
    }

}
