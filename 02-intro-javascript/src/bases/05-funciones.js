// Funciones en JS

const saludar = function (nombre) {
    return `Hola, ${nombre}`;
};

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
};

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola mundo`;

// console.log(saludar("Manolo"));

console.log(saludar2("Juan"));
console.log(saludar3("Pedro"));
console.log(saludar4());

const getUser = () => ({
    uid: "ABC123",
    username: "User",
});

const user = getUser();
console.log(user);

// Tarea

const getUsuarioActivo = (nombre) => ({
    uid: "ABC152",
    username: nombre,
});

const usuarioActivo = getUsuarioActivo("Fernando");
console.log(usuarioActivo);
