//const fs = require('fs');
import fs from "fs";
const PATH = './texto.txt';
const PATH_JSON = './crud/inventors.json';


let texto = fs.readFileSync(PATH, 'utf-8');

texto += `
Hola mundo desde codigo
`;

fs.writeFileSync(PATH, texto);

//console.log(texto);

let inventors = fs.readFileSync(PATH_JSON, 'utf-8');
inventors = JSON.parse(inventors);

inventors.forEach(inventor => {
    console.log(inventor);
});

// Ejercicio, añadir un nuevo inventor y persistirlo

const miInventor = {first: 'Juan', last: 'Perez', year: 1900};
inventors.push(miInventor);

fs.writeFileSync(PATH_JSON, JSON.stringify(inventors, null, ' '));


