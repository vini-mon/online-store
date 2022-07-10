'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/user');

/*
 * Gerencia as rotas de usuários
 */

router.post('/', controller.post);

router.put('/admin/:id', controller.putAdmin);

router.get('/:email', controller.getByEmail);
router.put('/:email', controller.putUser);

router.get('/', controller.getAll);
router.delete('/:id', controller.delete);

router.post('/auth', controller.authenticate);

module.exports = router;