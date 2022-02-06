const express = require('express');
const bodyParser = require('body-parser');
const student = require('./routes/student');

const app = express();

app.use(bodyParser.urlencoded());

app.use('/student', student);

app.get('/', (req, res) => {
    res.send('Hello world');
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server Running at Port: ${PORT}`);
});
