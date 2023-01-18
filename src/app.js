const express = require ('express');


const app = express();

const PORT = 8080;
const httpServer= app.listen(PORT, () =>{
    console.log(`servidor escuchando en el puerto ${PORT}` )
})

app.engine('handlebars', Handlebars.engine())
app.set()