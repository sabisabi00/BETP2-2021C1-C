// 1.- Leer el archivo inventors.json
// 2.- Insertar un inventor
// 3.- Actualizar el archivo
// 4.- Leer el archivo actualizado
// 5.- Motrarlo en consola

import fs from 'fs';
const path = './inventors.json';

const inventor = {_id: 9, first:'Rene', last: 'Favaloro', year: 1923};

// 1.- Leer archivo
fs.readFile(path, 'utf-8', (err, data) =>{
    if(!err){
        let inventors = JSON.parse(data);
        // 2.- insertar
        inventors.push(inventor);
        //console.log(inventors);
        // 3.- Actualizar archivo
        fs.writeFile(path, JSON.stringify(inventors, null, ' '), err =>{
            if(!err){
                // 4.- Leer archivo actualizado
                fs.readFile(path, 'utf-8', (err, data) => {
                    if(!err){
                        // 5.- Mostrarlo
                        console.log(JSON.parse(data));
                    }
                    else{
                        console.log(err.message);
                    }
                });
            }
            else {
                console.log(err.message);
            }
        });
    }
    else{
        console.log(err.message);
    } 
});
