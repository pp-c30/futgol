"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const enrutadorGaleria = express_1.Router();
enrutadorGaleria.route('/galeria').post();
exports.default = enrutadorGaleria;
