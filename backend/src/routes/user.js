'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/user');

/*
 * Gerencia as rotas de usuários
 */

router.post('/', controller.post);

router.get('/:email', controller.getByEmail);
router.put('/:email', controller.putUser);

router.get('/', controller.getAll);
router.delete('/', controller.delete);
router.put('/admin/:email', controller.putAdmin);

router.post('/auth', controller.authenticate);

module.exports = router;