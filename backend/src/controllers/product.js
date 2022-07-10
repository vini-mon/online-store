'use strict';

const ValidationContract = require('../validators/fluent-validator');
const repository = require('../repositories/product');

/*
 * Busca os produtos do banco de dados
 * Se existitem, retorna esses produtos
 * Se não existirem, retorna um erro
 */
exports.get = async(req, res, next) => {
    try {
        const data = await repository.get();
        res.status(200).send(data);
    } catch(e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

/*
 * Busca os produtos em estoque do banco de dados
 * Se existitem, retorna esses produtos
 * Se não existirem, retorna um erro
 */
exports.getInStock = async(req, res, next) => {
    try {
        const data = await repository.getInStock();
        res.status(200).send(data);
    } catch(e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

/*
 * Busca no banco de dados um produto específico pelo id
 * Se existir, retorna o produto
 * Se não existir, retorna um erro
 */
exports.getById = async(req, res, next) => {
    try {
        const data = await repository.getById(req.params.id);
        res.status(200).send(data);
    } catch(e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

/*
 * Insere um novo produto no banco de dados, fazendo algumas validações
 * antes de inserir
 * 
 * Se não houver erros, retorna um status 201 (Created)
 */
exports.post = async(req, res, next) => {
    let contract = new ValidationContract();

    contract.hasMinLen(req.body.name, 3, 'O título deve conter pelo menos 3 caracteres!');
    contract.hasMinLen(req.body.description, 3, 'A descrição deve conter pelo menos 3 caracteres!');
    
    if(!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
        return;
    }

    try {
        await repository.create(req.body);
        res.status(201).send({
            message: 'Produto cadastrado com sucesso!'
        });
    } catch(e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição',
            error: e
        });
    }
}

/*
 * Altera as informações de um determinado produto no banco de dados
 * buscando o produto pelo ID
 */
exports.put = async(req, res, next) => {
    try {
        await repository.update(req.params.id, req.body);
        res.status(200).send({
            message: 'Produto atualizado com sucesso!'
        });
    } catch(e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

/*
 * Remove um produto do banco de dados por meio do ID
 */
exports.delete = async(req, res, next) => {
    try {
        await repository.delete(req.params.id);
        res.status(200).send({
            message: 'Produto removido com sucesso!'
        });
    } catch(e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}