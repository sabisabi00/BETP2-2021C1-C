import express from 'express';

const PORT = 3000;
const app = express();

app.use(express.json());

app.post('/inventors', (req, res)=>{
    console.log('Nombre:', req.body.first);
    console.log('Apellido:', req.body.last);
    console.log('Año:', req.body.year);

    res.send(req.body);
});

app.listen(PORT, ()=>{
    console.log('Servidor Web levantado en el puerto:', PORT);
});