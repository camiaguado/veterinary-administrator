const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes')
const bodyParser = require('body-parser');
const cors = require('cors');

// Create Server:
const app = express();

// Config CORS: Esto sirve par no permitir que entren a la API desde las url
const whiteList = ['http://localhost:3000'];
const corsOptions = {
    origin: (origin, callback) => {
        const existe = whiteList.some( dominio => dominio === origin);
        if( existe ){
            callback(null, true)
        } else {
            callback(new Error('No Permitido por CORS'))
        }
    }
}
// Enable CORS
//HABILITAR ESTO PARA Q FUNCIONE
// app.use(cors(corsOptions));
app.use(cors());


// Connect to MongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/veterinary', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

// Enable bodyParser: extrae lo que el usuario envía, de form o desde postman
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// Enable routings
app.use('/', routes())
// Port and start server:
app.listen(4000, () => {
    console.log('The server is working...');
})