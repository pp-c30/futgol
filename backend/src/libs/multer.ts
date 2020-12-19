import multer from "multer";
import path from "path";
import { v4 as uuidv4 } from "uuid";

const storage = multer.diskStorage({
    destination:'uploads',
    filename: (req,file,cb) => {
        //le damos el nombre al archivo y se mantiene la extension original del mismo
        cb(null, uuidv4()+path.extname(file.originalname));
    }
});


export default multer({storage});