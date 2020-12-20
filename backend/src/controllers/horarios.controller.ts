import { Response,Request } from "express";
import { conexion } from "../database";
import { Ihorario } from "../models/horarios";

export class HorariosControllers
{
    public async listarHorarios(req:Request,res:Response)
    {
        //conecto con la base de datos
        const con= await conexion();

        let horarios = await con.query('select *,date_format(fecha_hora,"%d/%m/%Y %H:%i:%s") as fecha_hora from horario_entrenamiento');

        return res.json(horarios);
    }

    public async crearHorarios(req:Request, res:Response)
    {
        //Recibo datos atravez del POST
        let horarios:Ihorario = req.body;

        //conecto con la base de datos
        const con = await conexion();

        //hago INSERT de un horario
        await con.query('insert into horario_entrenamiento set ?', [horarios]);

        return res.json('se ha insertado horarios');
    }

    public async eliminarHorarios(req:Request,res:Response)
    {
        //recibimo el ID a traves del DELETE
        let id_horario_entrenamiento = req.params.id;

        //obtenemos conexion con la base de datos
        let con = await conexion();

        await con.query('delete from horario_entrenamiento where id_horario_entrenamiento= ?',id_horario_entrenamiento);

        return res.json('el horario se elimino');
    }

    public async actualizarHorarios(req:Request,res:Response)
    {
         //recibo el ID de los horarios a actualizar
        let id_horario_entrenamiento = req.params.id;

        //recibo un JSON con los datos actualizados 
        let horarios = req.body;

        //se logra la conexion con la base de datos
        let con = await conexion();

        await con.query('update horario_entrenamiento set ? where id_horario_entrenamiento = ? ', [horarios,id_horario_entrenamiento]);

        return res.json('el horario se actualizo');
    }

    public async obtenerhorarios(req:Request,res:Response)
    {
        //recibo ID para obtener el horario
        let id_horario_entrenamiento = req.params.id;
        
        //se obtiene conexion con base de datos
        let con = await conexion();
        
        //filtro el horario a travez de ID
        let horarios = await con.query('select * from horario_entrenamiento where id_horario_entrenamiento = ?' ,[id_horario_entrenamiento]);
        
        //encuentro el horarios
        return res.json(horarios[0]);
    }

}
