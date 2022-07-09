'use strict';
const mongoose = require('mongoose');
const Order = mongoose.model('Order');
const Product = mongoose.model('Product');

/*
 * Busca todos os pedidos do banco de dados
 * Retorna esses pedidos
 */
exports.get = async(data) => {
    var res = await Order
        .find({}, 'status user items')
        .populate('user', 'name')
        .populate('items.product', 'name');
    return res;
}

/*
 * Insere no banco de dados um novo pedido de acordo
 * com os dados passados
 * 
 * Para cada produto do pedido, altera o estoque do produto
 * e a quantidade vendida desse produto
 */
exports.create = async(data) => {
    var order = new Order(data);

    data.items.forEach(async(item) => {
        await Product.findByIdAndUpdate(item.product, {
            $inc: {
                stock: -item.quantity,
                sold: item.quantity
            }
        });
    })
    
    await order.save();
}