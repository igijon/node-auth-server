

const express = require('express');




// Crear el servicor/aplicación de express
const app = express();


//Ejemplo de petición GET
app.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'Todo salió guay',
        uid: 1234
    });
}); 

app.listen( 4000, () => {
    console.log(`Servidor corriendo en puerto ${4000}`);
});