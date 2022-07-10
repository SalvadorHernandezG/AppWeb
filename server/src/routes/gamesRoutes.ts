import {Router} from 'express';
import { gamesController } from './../controllers/gamesControllers';

class GamesRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config() :void{
        this.router.get('/',gamesController.list);
        this.router.get('/:id', gamesController.getOne);
        /**Creando una rita de mi aplicacion del servidor para
         * la ruta inicial, y esta devolvera un mensaje de hello
         */
        this.router.post('/',gamesController.create);
        this.router.delete('/:id',gamesController.delete);
        this.router.put('/:id',gamesController.update);
    }
}

const gamesRoutes = new GamesRoutes(); //se instancia la clase y se devuelve el objeto
export default gamesRoutes.router;