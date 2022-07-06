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

// exports.getBySlug = async(slug) => {
//     const res = await Product.findOne({
//         slug: slug,
//         active: true
//     }, 'title description price slug tags');

//     return res;
// }

// exports.getByTag = async(tag) => {
//     const res = await Product.find({
//         tags: tag,
//         active: true
//     }, 'title description price slug tags');

//     return res;
// }

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