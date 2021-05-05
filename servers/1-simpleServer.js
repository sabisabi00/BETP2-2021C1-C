import http from 'http';

http.createServer((req, res) =>{
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hola mundo desde un webserver');
    res.end();
}).listen(3000, '127.0.0.1', ()=>{
    console.log('Servidor web levantado y escuchando el puerto 3000');
});