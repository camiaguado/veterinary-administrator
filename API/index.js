const express = require('express');
// Create Server:
const app = express();

// Port and start server:
app.listen(4000, () => {
    console.log('The server is working...');
})