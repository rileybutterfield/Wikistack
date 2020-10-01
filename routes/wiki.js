const express = require('express');
const router = express.Router();
const addPage = require('../views/addPage.js');

router.use(function(req, res, next) {
    next();
});

module.exports = router;



router.get('/', (req, res, next) => {
    res.send('Homepage');
});
router.post('/', (req, res, next) => {
    res.send('I am a post!');
});
router.get('/add', (req, res, next) => {
    res.send(addPage());
});