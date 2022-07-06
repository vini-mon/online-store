'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/product');

router.get('/', controller.getInStock);
router.get('/admin', controller.get);
router.get('/:id', controller.getById);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/', controller.delete);

module.exports = router;