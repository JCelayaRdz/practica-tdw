import Modelo from "./Modelo";

export default class Person extends Modelo {
    constructor(name, birth, death, wiki, image) {
        super(name, birth, death, wiki, image);
        this.claveLocalStorage = "persons";
    }

    async obtenerListado() {
      const datos = localStorage.getItem(this.claveLocalStorage);
      return datos ? JSON.parse(datos) : []; 
    }

    async guardarListado(listado) {
        localStorage.setItem(this.claveLocalStorage, JSON.stringify(listado));
    }
}