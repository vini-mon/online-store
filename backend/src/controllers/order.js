'use strict';

const repository = require('../repositories/order');

/*
 * Faz a busca da lista de pedidos e retorna, caso exista
 * Se não existir, retorna um erro
 */
exports.get = async(req, res, next) => {
    try {
        const data = await repository.get();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

/*
 * Cadastra um novo pedido no banco de dados
 * de acordo com as informações passadas
 */
exports.post = async(req, res, next) => {
    try {
        await repository.create({
            user: req.body.id,
            items: req.body.items
        });
        res.status(201).send({
            message: 'Pedido cadastrado com sucesso!'
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};