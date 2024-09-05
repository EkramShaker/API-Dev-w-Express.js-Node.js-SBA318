const express = require('express');
const router = express.Router();
const juiceModel = require('../models/juice');

// GET all juices
router.get('/', (req, res) => {
    const juices = juiceModel.getAllJuices();
    res.render('HomePage', { juices });
});

// POST a new juice
router.post('/', (req, res) => {
    const { name, ingredients } = req.body;
    juiceModel.addJuice(name, ingredients);
    res.redirect('/juices');
});

// PUT (update) a juice by ID
router.put('/:id', (req, res) => {
    const { name, ingredients } = req.body;
    const updatedJuice = juiceModel.updateJuice(parseInt(req.params.id), name, ingredients);
    if (!updatedJuice) return res.status(404).send('Juice not found.');
    res.redirect('/juices');
});

// DELETE a juice by ID
router.delete('/:id', (req, res) => {
    juiceModel.deleteJuice(parseInt(req.params.id));
    res.redirect('/juices');
});

module.exports = router;
