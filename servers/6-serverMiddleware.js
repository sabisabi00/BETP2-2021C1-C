import express from 'express';

const PORT = 3000;
const app = express();

app.use('/', (req, res, next)=>{
    if(req.query.token == '123456'){
        next();
    }
    else{
        res.status(401).send('login fail');
    }
    console.log('paso por el middleware');
});

app.get('/', (req, res)=>{
    res.send('Respuesta del servidor');
    console.log('paso por el get');
});

app.listen(PORT, ()=>{
    console.log('Servidor Web levantado en el puerto:', PORT);
});