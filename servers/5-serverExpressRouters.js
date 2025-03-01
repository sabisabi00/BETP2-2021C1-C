import express from 'express';

const PORT = 3000;
const app = express();

const inventors = [
    { _id: 1, first: 'Albert', last: 'Einstein', year: 1879 },
    { _id: 2, first: 'Isaac', last: 'Newton', year: 1643 },
    { _id: 3, first: 'Galileo', last: 'Galilei', year: 1564 },
    { _id: 4, first: 'Marie', last: 'Curie', year: 1867 },
    { _id: 5, first: 'Johannes', last: 'Kepler', year: 1571 },
    { _id: 6, first: 'Nicolaus', last: 'Copernicus', year: 1473 },
    { _id: 7, first: 'Max', last: 'Planck', year: 1858 },
  ];

// /api/inventors <- Listado de todos los inventores
// /api/inventors/6 <- Inventor 6

// API REST FULL

app.get('/', (req, res) =>{
    res.send(`
        <html>
            <head></head>
            <body>
                Home de api rest con express
                <h1> ID: ${req.query.id} </h1>
                <h1> Name: ${req.query.name} </h1>
            </body>
        </html>
    `);
});

app.get('/api/inventors', (req, res)=>{
    res.json(inventors);
});

app.get('/api/inventors/:id', (req, res)=>{
    let inventor = inventors.find(inventor => inventor._id == req.params.id);
    res.json(inventor);
});

app.listen(PORT, ()=>{
    console.log('Servidor Web levantado en el puerto:', PORT);
});