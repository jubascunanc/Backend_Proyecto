const { request } = require('express');
const express = require ('express');
const handlebars= require ('express-handlebars')
const {Server} = require('socket.io')

const app = express();

const PORT = 8080;
const httpServer= app.listen(PORT, () =>{
    console.log(`servidor escuchando en el puerto ${PORT}` )
})

app.engine('handlebars', Handlebars.engine())
app.set('Views', __dirname + '/Views');
app.set('view engine', 'handlebars');
app.use(express.static(__dirname+ '/Public'));

app.get('/', (req,res) =>{
    res.render('index', {});
})