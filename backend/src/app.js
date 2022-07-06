'use strict'

const express = require('express');
const bodyPaser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// Conecta ao banco
mongoose.connect('mongodb+srv://petstore:petstore@projetoweb.mspsgxb.mongodb.net/?retryWrites=true&w=majority')

// Carrega os models
const Product = require('./models/product');

// Carrega as rotas
const index = require('./routes/index');
const product = require('./routes/product');

app.use(bodyPaser.json());
app.use(bodyPaser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/product', product);

module.exports = app;

// 200 = OK
// 201 = CREATED
// 400 = BAD REQUEST
// 401 = NAO AUTENTICADO
// 403 = ACESSO NEGADO  