const express = require('express');
router = express.Router();




router.get('/', (req, res) => {
    res.send('Hello FROM API')
  })


module.exports = router;
