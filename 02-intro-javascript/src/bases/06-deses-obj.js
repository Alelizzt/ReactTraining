// Desestructuracion
// Asignacion Desestructurante

const persona = {
    nombre: "Tony",
    edad: 45,
    clave: "Ironman",
};

// const { clave, nombre: nombre2, edad } = persona;

// console.log(nombre2);
// console.log(edad);
// console.log(clave);

const useContext = ({ clave, nombre, edad, rango = "Capitan" }) => {
    // console.log(nombre, edad, rango);
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.23123,
            lng: -23.3412,
        },
    };
};

// const {
//     nombreClave,
//     anios,
//     latlng: { lat, lng },
// } = useContext(persona);
const { nombreClave, anios, latlng } = useContext(persona);
const { lat, lng } = latlng;
console.log(nombreClave, anios);
console.log(lat, lng);
