setTimeout(() => {
    console.log('Hola mundo despues de los 5 segundos');
}, 5000);

setTimeout(() => {
    console.log('Hola despues de 7 segundos');
}, 7000);

let i=0;

let id = setInterval(() => {
    console.log('Hola mundo cada segundo');
    i++;
    if(i === 5){
        clearInterval(id);
    }
}, 1000);