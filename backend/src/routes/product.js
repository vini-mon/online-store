'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/product');

/*
 * Gerencia as rotas de produtos
 */

router.get('/', controller.getInStock);
router.get('/admin', controller.get);
router.get('/:id', controller.getById);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);

module.exports = router;