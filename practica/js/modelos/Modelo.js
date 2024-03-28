export default class Modelo {
    constructor(name, birth, death, wiki, image) {
        this.name = name;
        this.birth = birth;
        this.death = death;
        this.wiki = wiki;
        this.image = image;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getBirth() {
        return this.birth;
    }

    setBirth(birth) {
        this.birth = birth;
    }
    
    getDeath() {
        return this.death;
    }

    setDeath(death) {
        this.death = death;
    }

    getWiki() {
        return this.wiki;
    }

    setWiki(wiki) {
        this.wiki = wiki;
    }

    getImage() {
        return this.image;
    }

    setImage(image) {
        this.image = image;
    }
    
    async obtenerListado() {
        throw new Error("Metodo obtenerListado() no implementado para la clase Modelo");
    }
}