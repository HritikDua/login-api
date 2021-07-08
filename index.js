const express = require('express');
const routes = require('./routers/route');
const app = express();

app.use(express.json());
app.use(routes);

app.listen(3000,() => console.log('Server is up and running on port 3000'));
