import Modelo from "./Modelo";

export default class Product extends Modelo {
    constructor(name, birth, death, wiki, image) {
        super(name, birth, death, wiki, image);
        this.persons = [];
        this.entities = [];
    }

    getPersons() {
        return this.persons;
    }

    setPersons(persons) {
        this.persons = persons;
    }

    getEntities() {
        return this.entities;
    }

    setEntities(entities) {
        this.entities = entities;
    }

    async obtenerListado() {
        const datos = localStorage.getItem(this.claveLocalStorage);
        return datos ? JSON.parse(datos) : [];
    }

    async guardarListado(listado) {
        localStorage.setItem(this.claveLocalStorage, JSON.stringify(listado));
    }
}