'use strict'

const express = require('express');
const bodyPaser = require('body-parser');
const mongoose = require('mongoose');

// Arquivo com configurações do servidor
const config = require('./config'); 

const app = express();

// Conecta ao banco
mongoose.connect(config.connectionString)

// Importa os models
const Product = require('./models/product');
const User = require('./models/user');
const Order = require('./models/order');

// Importa as rotas
const index = require('./routes/index');
const product = require('./routes/product');
const order = require('./routes/order');
const user = require('./routes/user');

// Habilita no cors o acesso de qualquer origem
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

// Permite que o body seja interpretado como json
app.use(bodyPaser.json());
app.use(bodyPaser.urlencoded({ extended: false }));

// Carrega as rotas
app.use('/', index);
app.use('/product', product);
app.use('/user', user);
app.use('/order', order);

module.exports = app;
