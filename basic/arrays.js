// declaración e inicializacion de un Array

let nombres = ['Juan', 'Pedro', 'Maria', 'Eduardo'];

let primerNombre = nombres[0];
let ultimoNombre = nombres[nombres.length -1];

// iterar en un Array
for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}
console.log();

for (const nombre of nombres) {
    if(nombre === 'Pedro'){
        break;
    }
    console.log(nombre);
}

for (const nombre in nombres) {
   console.log(nombres[nombre]);
}


