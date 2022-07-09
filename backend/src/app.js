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
const auth = require('./routes/auth');

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

app.use(bodyPaser.json());
app.use(bodyPaser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/product', product);
app.use('/user', user);
app.use('/auth', auth)

module.exports = app;
