//const fs = require('fs');
import fs from 'fs';
const PATH_JSON = './inventors.json';

function getInventors(){
    return JSON.parse(fs.readFileSync(PATH_JSON, 'utf-8'));
}

function getInventor(id){
    return getInventors()
        .find(inventor => inventor._id === id);
}

// EJERCICIO
function pushInventor(inventor){
    const inventors = getInventors();
    inventors.push(inventor);
    fs.writeFileSync(PATH_JSON, JSON.stringify(inventors, null, ' '));
}

function updateInventor(inventor){

}

function deleteInventor(id){

}

export default {getInventor, getInventors, pushInventor, updateInventor, deleteInventor};


