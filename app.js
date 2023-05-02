const express = require('express');
// const helloClass = require('./modules/helloClass')

const app = express();

app.get('/', function(request, response) {
    response.send('Hello World!'); // add helloClass.
})

var port = process.env.PORT ||  8091;
app.listen(port);
console.log('API is running at + http://localhost:' + port)


