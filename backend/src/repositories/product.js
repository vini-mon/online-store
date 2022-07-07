'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = async() => {
    const res = await Product.find(
        {},
        '_id name description price stock sold img sound'
    );

    return res;
}

exports.getInStock = async() => {
    const res = await Product.find({
        stock: {
            $gt: 0
        }
    }, '_id name description price stock img sound');

    return res;
}

exports.getById = async(id) => {
    const res = await Product.findById(id);
    return res;
}

exports.create = async(data) => {
    let product = new Product(data);
    await product.save();
}

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

exports.delete = async(id) => {
    await Product.findByIdAndRemove(id);
}