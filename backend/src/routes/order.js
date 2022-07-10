'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/order');

/*
 * Gerencia as rotas de pedidos
 */

router.get('/', controller.get);
router.post('/', controller.post);

module.exports = router;