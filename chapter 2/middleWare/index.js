const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const consoleMethod = (req, res, next) => {
    console.log(req.method);
    next('Error de qualquer coisa');
};

const consoleBody = (req, res, next) => {
    console.log('Teste', req.body);
    next();
};

const hello = (req, res) => {
    res.send('hello world');
};

app.use('/', bodyParser.json()); //Use executa independente do método
app.use('/', consoleBody, hello);

app.get('/', consoleMethod, hello);

app.post('/', consoleMethod, hello);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server Running at Port: ${PORT}`);
});
