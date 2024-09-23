const express = require('express');
const router = express.Router();
const kiisha = require('../controller/KiishaController.js')

router.get('/', kiisha.index);
router.get('/about', kiisha.about);
router.get('/book', kiisha.book);
router.get('/menu', kiisha.menu);
module.exports = router;