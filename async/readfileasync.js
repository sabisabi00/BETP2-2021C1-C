//const fs = require('fs');
import fs from 'fs';
const path = './bigfile.txt';

fs.readFile(path,'utf-8', (err, texto) =>{
    if(!err){
        console.log(texto);
    }
    else {
        console.log(err.message);
    }
});

console.log('Mientras se lee el archivo.....');



