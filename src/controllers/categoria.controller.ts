import { Response,Request } from "express";
import { conexion } from "../database";
import { Icategoria } from "../models/categoria";

export class CategoriaControllers
{
    public async listarCategoria(req:Request,res:Response)
    {
        //conecto con la base de datos
        const con= await conexion();

        let categoria = await con.query('select * from categoria');

        return res.json(categoria);
    }

    public async crearCategoria(req:Request, res:Response)
    {
        //Recibo datos atravez del POST
        let categoria:Icategoria = req.body;

        //conecto con la base de datos
        const con = await conexion();

        //hago INSERT de una categoria
        await con.query('insert into categoria set ?', [categoria]);

        return res.json('se ha insertado categoria');
    }

    public async eliminarCategoria(req:Request,res:Response)
    {
        //recibimo el ID a traves del DELETE
        let id_categoria_socio = req.params.id;

        //obtenemos conexion con la base de datos
        let con = await conexion();

        await con.query('delete from encuentros where id_categoria_socio= ?',id_categoria_socio);

        return res.json('la categoria se elimino');
    }

    public async actualizarCategoria(req:Request,res:Response)
    {
         //recibo el ID de las categorias a actualizar
        let id_categoria_socio = req.params.id;

        //recibo un JSON con los datos actualizados 
        let categoria = req.body;

        //se logra la conexion con la base de datos
        let con = await conexion();

        await con.query('update categoria set ? where id_categoria_socio = ? ', [categoria,id_categoria_socio]);

        return res.json('la categoria se actualizo');
    }

    public async obtenercategoria(req:Request,res:Response)
    {
        //recibo ID para obtener la categoria
        let id_categoria_socio = req.params.id;
        
        //se obtiene conexion con base de datos
        let con = await conexion();
        
        //filtro la categoria a travez de ID
        let categoria = await con.query('select * from categoria where id_categoria_socio = ?' ,[id_categoria_socio]);
        
        //consigo la categoria
        return res.json(categoria[0]);
    }

}
