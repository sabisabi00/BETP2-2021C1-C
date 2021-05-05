import http from 'http';

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879 },
    { first: 'Isaac', last: 'Newton', year: 1643 },
    { first: 'Galileo', last: 'Galilei', year: 1564 },
    { first: 'Marie', last: 'Curie', year: 1867 },
    { first: 'Johannes', last: 'Kepler', year: 1571 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473 },
    { first: 'Max', last: 'Planck', year: 1858 },
  ];

http.createServer((req, res) =>{
    switch (req.url) {
        case '/':
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write('API de la aplicación INVENTORES SRL.');
            break;
        case '/api/inventors':
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.write(JSON.stringify(inventors, null, ' '));
            break;
        default:
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.write('Recurso no encontrado, vea el manual de la API');
            break;
    }
        
    res.end();
}).listen(3000, '127.0.0.1', ()=>{
    console.log('Servidor web levantado y escuchando el puerto 3000');
});