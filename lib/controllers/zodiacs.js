const { Router } = require('express');
const { zodiacs } = require('../zodiac-data');

module.exports = Router()
  .get('/:id', (req, res) => {
    const zodiacSigns = zodiacs.find((zodiac) => zodiac.id === req.params.id);
    res.json(zodiacSigns);
  })
  .get('/', (req, res) => {
    const filteredZodiacs = zodiacs.map((zodiac) => {
      return { id: zodiac.id, name: zodiac.name };
    });
    res.json(filteredZodiacs);
  });
