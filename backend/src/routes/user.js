'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/user');

router.get('/', controller.getAll);
router.post('/', controller.post);
router.delete('/', controller.delete);

router.get('/:email', controller.getByEmail);
router.put('/:email', controller.putUser);
router.put('/admin/:email', controller.putAdmin);

module.exports = router;