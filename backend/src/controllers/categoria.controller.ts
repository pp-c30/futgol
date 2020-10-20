import { Response,Request } from "express";
import { conexion } from "../database";
import { Icategoria } from "../models/categoria";

export class CategoriaControllers
{
    public async listarCategoria(req:Request,res:Response)
    {
        //conecto con la base de datos
        const con= await conexion();

        let categoria = await con.query('select * from categoria_socio');

        return res.json(categoria);
    }

    public async crearCategoria(req:Request, res:Response)
    {
        //Recibo datos atravez del POST
        let categoria_socio:Icategoria = req.body;

        //conecto con la base de datos
        const con = await conexion();

        //hago INSERT de una categoria
        await con.query('insert into categoria_socio set ?', [categoria_socio]);

        return res.json('se ha insertado categoria');
    }

    public async eliminarCategoria(req:Request,res:Response)
    {
        //obtenemos conexion con la base de datos
        const db = await conexion();

        let codigo = req.params.codigo_categoria_socio;

        await db.query('delete from categoria_socio where id_categoria_socio = ?',[codigo]);

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

        await con.query('update categoria_socio set ? where id_categoria_socio = ? ', [categoria,id_categoria_socio]);

        return res.json('la categoria se actualizo');
    }

    public async obtenercategoria(req:Request,res:Response)
    {
        //recibo ID para obtener la categoria
        let id_categoria_socio = req.params.id;
        
        //se obtiene conexion con base de datos
        let con = await conexion();
        
        //filtro la categoria a travez de ID
        let categoria = await con.query('select * from categoria_socio where id_categoria_socio = ?' ,[id_categoria_socio]);
        
        //consigo la categoria
        return res.json(categoria[0]);
    }

}
