const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes')
// Create Server:
const app = express();

// Connect to MongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/veterinary', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

// Enable routings
app.use('/', routes())
// Port and start server:
app.listen(4000, () => {
    console.log('The server is working...');
})