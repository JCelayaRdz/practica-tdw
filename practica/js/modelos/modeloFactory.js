export default class ModeloFactory {
    static crearModelo(tipo) {
        switch (tipo) {
            case "localStorage":
                return null;
            default:
                throw new Error(`Modelo del tipo ${tipo} no encontrado.`);
        }
    }
}