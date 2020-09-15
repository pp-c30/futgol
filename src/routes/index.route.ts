
import { Router } from "express";

import { mensaje_bienvenida } from "../controlles/index.controller";

let enrutadorIndex = Router();

enrutadorIndex.route('/').get(mensaje_bienvenida);

export default enrutadorIndex; 