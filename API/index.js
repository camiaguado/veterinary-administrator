const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes')
const bodyParser = require('body-parser');

// Create Server:
const app = express();

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