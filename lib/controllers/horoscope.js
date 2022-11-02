const { Router } = require('express');
const { horoscopes } = require('../horoscope-data');

module.exports = Router().get('/:sign', (req, res) => {
  const horoscopeSigns = horoscopes.find(
    (horoscope) => horoscope.sign === req.params.sign
  );

  res.json(horoscopeSigns);
});
