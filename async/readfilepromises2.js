import fs from 'fs/promises';
const path = './inventors.json';
const inventor = {_id: 9, first:'Rene', last: 'Favaloro', year: 1923};

async function getInventors(){
    return fs.readFile(path, 'utf-8');
}

async function pushInventor(inventor, inventors){
    inventors.push(inventor);
    return fs.writeFile(path, JSON.stringify(inventors, null, ' '));
}

try {
    let inventors = await getInventors();
    await pushInventor(inventor, JSON.parse(inventors));
    inventors = await getInventors();
    console.log(inventors);
} catch (error) {
    console.log(error.message);
}
