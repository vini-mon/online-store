'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/product');
const authService = require('../services/auth');

/*
 * Gerencia as rotas de produtos
 */

router.get('/', controller.getInStock);

router.get('/:id', authService.isAdmin, controller.getById);
router.get('/admin', authService.isAdmin, controller.get);
router.post('/', authService.isAdmin, controller.post);
router.put('/:id', authService.isAdmin,  controller.put);
router.delete('/', authService.isAdmin,  controller.delete);

module.exports = router;