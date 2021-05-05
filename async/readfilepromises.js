// 1.- Leer el archivo inventors.json
// 2.- Insertar un inventor
// 3.- Actualizar el archivo
// 4.- Leer el archivo actualizado
// 5.- Motrarlo en consola

import fs from 'fs/promises';
const path = './inventors.json';
const inventor = {_id: 9, first:'Rene', last: 'Favaloro', year: 1923};

fs.readFile(path, 'utf-8').then(data =>{
    let inventors = JSON.parse(data);
    inventors.push(inventor);
    return fs.writeFile(path, JSON.stringify(inventors, null, ' '));
}).then(()=>{
    return fs.readFile(path, 'utf-8');        
}).then(data =>{
    console.log(data);
}).catch(err =>{
    console.log(err.message);
});
