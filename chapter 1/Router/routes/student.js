const express = require('express');
const router = express.Router();

const students = [
    { id: 1, nome: 'Fulano' },
    { id: 2, nome: 'Ciclano' },
    { id: 3, nome: 'Delcrano' },
    { id: 4, nome: 'Gabriel' },
    { id: 5, nome: 'Ben 10' },
];

router.get('/', (req, res) => {
    res.json(students);
});

router.get('/all', (req, res) => {
    res.json(students);
});

router.get('/', (req, res, next) => {
    const student = students[Number(req.body.id) - 1];
    if (student) {
        res.json(student);
    } else {
        next();
    }
});

router.get('/', (req, res) => {
    const student = students[Number(req.query.id) - 1];
    if (student) {
        res.json(student);
    } else {
        res.send('Aluno não encontrado');
    }
});

router.get('/:id', (req, res) => {
    const student = students[Number(req.params.id) - 1];
    if (student) {
        res.json(student);
    } else {
        res.send('Aluno não encontrado');
    }
});

module.exports = router;
