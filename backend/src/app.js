'use strict'

const express = require('express');
const bodyPaser = require('body-parser');
const mongoose = require('mongoose');

const config = require('./config');

const app = express();

// Conecta ao banco
mongoose.connect(config.connectionString)

// Carrega os models
const Product = require('./models/product');
const User = require('./models/user');

// Carrega as rotas
const index = require('./routes/index');
const product = require('./routes/product');
const user = require('./routes/user');

app.use(bodyPaser.json());
app.use(bodyPaser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/product', product);
app.use('/user', user);

module.exports = app;
