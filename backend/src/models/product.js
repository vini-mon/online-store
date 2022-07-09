'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
 * Define o schema do produto
 */

const schema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    sold: {
        type: Number,
        required: true,
        default: 0
    },
    img: {
        type: String,
        required: true,
        trim: true
    },
    sound: {
        type: String,
        default: ''
    }
});

module.exports = mongoose.model('Product', schema);