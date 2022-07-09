'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

/*
 * Busca no banco de dados todos os produtos
 * Retorna esses produtos
 */
exports.get = async() => {
    const res = await Product.find(
        {},
        '_id name description price stock sold img sound'
    );

    return res;
}

/*
 * Busca no banco de dados todos os produtos
 * Retorna aqueles com estoque maior que 0
 */
exports.getInStock = async() => {
    const res = await Product.find({
        stock: {
            $gt: 0
        }
    }, '_id name description price stock img sound');

    return res;
}

/*
 * Busca no banco de dados um produto pelo id
 * Retorna as informações do produto
 */
exports.getById = async(id) => {
    const res = await Product.findById(id);
    return res;
}

/*
 * Insere no banco de dados um novo produto
 */
exports.create = async(data) => {
    let product = new Product(data);
    await product.save();
}

/*
 * Busca no banco de dados um produto pelo id
 * Realiza o update do produto com os dados passados
 */
exports.update = async(id, data) => {
    await Product.findByIdAndUpdate(id, {
        $set: {
            name: data.name,
            description: data.description,
            price: data.price,
            stock: data.stock,
            img: data.img,
            sound: data.sound
        }
    });
}

/*
 * Busca no banco de dados um produto pelo id
 * Realiza o delete do produto
 */
exports.delete = async(id) => {
    await Product.findByIdAndRemove(id);
}