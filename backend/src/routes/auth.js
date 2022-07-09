'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/auth');

/*
 * Gerencia a rota de autenticação
 */

router.post('/', controller.authenticate);

module.exports = router;