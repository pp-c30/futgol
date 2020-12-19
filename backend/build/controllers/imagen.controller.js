"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImagenController = void 0;
const database_1 = require("../database");
const fs_extra_1 = __importDefault(require("fs-extra"));
const cloudinary_1 = __importDefault(require("cloudinary"));
class ImagenController {
    listarImagenes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            let imagenes = yield db.query('selec * from galeria_imagenes');
            res.json(imagenes);
        });
    }
    guardarImagen(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //se accede a los archivos recibidos
            const files = req.files;
            const ig = req.body.id_galeria;
            const iurl = req.body.imagen_url;
            const puid = req.body.public_id;
            const pd = req.body.portada;
            const db = yield database_1.conexion();
            const unaGaleria = {
                titulo_imagen: req.body.titulo_imagen,
                categoria: req.body.categoria,
                estado: req.body.estado
            };
            const resultado = yield db.query('insert into galeria set ?', [unaGaleria]);
            for (let i = 0; i < files.length; i++) {
                //le espicificamos el path (la ruta) de la imagen guardada en la carpeta uploads
                const resultado_cloudinary = yield cloudinary_1.default.v2.uploader.upload(files[i].path);
                const imagen_galeria = {
                    id_galeria: resultado.insertId,
                    imagen_url: resultado_cloudinary.url,
                    public_id: resultado_cloudinary.public_id
                };
                yield db.query('insert into galeria_imagenes set?', [imagen_galeria]);
                yield fs_extra_1.default.unlink(files[i].path);
            }
            res.json('se inserto exitosamente');
        });
    }
}
exports.ImagenController = ImagenController;
