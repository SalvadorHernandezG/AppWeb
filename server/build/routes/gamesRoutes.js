"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gamesControllers_1 = require("./../controllers/gamesControllers");
class GamesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', gamesControllers_1.gamesController.list);
        this.router.get('/:id', gamesControllers_1.gamesController.getOne);
        /**Creando una rita de mi aplicacion del servidor para
         * la ruta inicial, y esta devolvera un mensaje de hello
         */
        this.router.post('/', gamesControllers_1.gamesController.create);
        this.router.delete('/:id', gamesControllers_1.gamesController.delete);
        this.router.put('/:id', gamesControllers_1.gamesController.update);
    }
}
const gamesRoutes = new GamesRoutes(); //se instancia la clase y se devuelve el objeto
exports.default = gamesRoutes.router;
