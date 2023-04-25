const express = require('express');
const router = express.Router();
const Falta = require('../models/falta');
const faltaDB = require('../data/faltas.json');

router.get('', function (req, res, next) {
    const faltas = [];
    faltaDB.data.forEach(function(item, index) {
        const falta = new Falta(item.disciplina, item.faltas);
        faltas.push(falta);
    });
    res.render('faltas/list', { faltas: faltas });
});

module.exports = router;