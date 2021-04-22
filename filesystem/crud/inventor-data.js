const fs = require('fs');
const PATH_JSON = `${__dirname}/inventors.json`;

function getInventors(){
    return JSON.parse(fs.readFileSync(PATH_JSON, 'utf-8'));
}

function getInventor(id){
    return getInventors()
        .find(inventor => inventor._id === id);
}

// EJERCICIO
function pushInventor(inventor){

}

function updateInventor(inventor){

}

function deleteInventor(id){

}

module.exports = {getInventor, getInventors, pushInventor, updateInventor, deleteInventor};


