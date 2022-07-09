'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/user');
const authService = require('../services/auth');

router.post('/', controller.post);

router.get('/:email', authService.authorize, controller.getByEmail);
router.put('/:email', authService.authorize, controller.putUser);

router.get('/', authService.isAdmin, controller.getAll);
router.delete('/', authService.isAdmin, controller.delete);
router.put('/admin/:email', authService.isAdmin, controller.putAdmin);

// router.post('/authenticate', controller.authenticate);

module.exports = router;