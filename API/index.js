const express = require('express');
const mongoose = require('mongoose');

// Create Server:
const app = express();

// Connect to MongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/veterinary', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});
// Port and start server:
app.listen(4000, () => {
    console.log('The server is working...');
})