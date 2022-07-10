import {Router} from 'express';
import { gamesController} from './../controllers/gamesControllers';

class IndexRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }
            
          
    config() :void{
        this.router.get('/',(req,resp)=> resp.send("Hello"));
        /**Creando una rita de mi aplicacion del servidor para
         * la ruta inicial, y esta devolvera un mensaje de hello
         */
    }
}

const indexRoutes = new IndexRoutes(); //se instancia la clase y se devuelve el objeto
export default indexRoutes.router;