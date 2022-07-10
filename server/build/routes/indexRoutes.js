"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class IndexRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', (req, resp) => resp.send("Hello"));
        /**Creando una rita de mi aplicacion del servidor para
         * la ruta inicial, y esta devolvera un mensaje de hello
         */
    }
}
const indexRoutes = new IndexRoutes(); //se instancia la clase y se devuelve el objeto
exports.default = indexRoutes.router;
