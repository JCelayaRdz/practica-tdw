fetch("http://127.0.0.1:5500/resources.json")
    .then(res => {
        if (!res.ok) {
            throw new Error("Error al cargar el archivo JSON.");
        }
        return res.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.error("Hubo un problema al cargar el archivo JSON:", err);
    })