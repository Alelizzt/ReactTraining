import { getHeroeById } from "./bases/08-imp-exp";

// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         //Tarea
//         const p1 = getHeroeById(2);
//         resolve(p1);
//         // reject("no se logro encontrar el heroe");
//     }, 2000);
// });

// promesa
//     .then((heroe) => {
//         console.log("Heroe", heroe);
//     })
//     .catch((err) => console.warn(err));

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //Tarea
            const p1 = getHeroeById(id);
            if (p1) {
                resolve(p1);
            } else {
                reject("no se logro encontrar el heroe");
            }
        }, 2000);
    });
};

getHeroeByIdAsync(2).then(console.log).catch(console.warn);
