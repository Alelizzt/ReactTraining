const persona = {
    nombre: "Tony",
    apellido: "Stark",
    edad: 45,
    direccion: {
        ciudad: "New York",
        zip: 333223,
        lat: 14.123123,
        lng: 92.345521,
    },
};

// console.table(persona);

const persona2 = { ...persona };
persona2.nombre = "Peter";

console.log(persona);
console.log(persona2);
