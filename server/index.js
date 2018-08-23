const express = require('express');
const bodyParser = require('body-parser');0

const app = express();

//middlewares
app.use(bodyParser.json());

//routes
require('./routes')(app);

//dynamic port binding
const PORT = process.env.PORT || 8080;
console.log(`Listenging on ${PORT}`);
app.listen(PORT);
