"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_1 = __importDefault(require("../libs/multer"));
const imagen_controller_1 = require("../controllers/imagen.controller");
const imagenController = new imagen_controller_1.ImagenController;
const enrutadorImagen = express_1.Router();
enrutadorImagen.route('/imagen').post(multer_1.default.array('img_imagen'), imagenController.guardarImagen);
exports.default = enrutadorImagen;
