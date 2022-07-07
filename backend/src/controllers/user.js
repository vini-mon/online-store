'use strict';

const ValidationContract = require('../validators/fluent-validator');
const repository = require('../repositories/user');

exports.getAll = async(req, res, next) => {
    try {
        const data = await repository.getAll();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

exports.getByEmail = async(req, res, next) => {
    try {
        const data = await repository.getByEmail(req.params.email);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

exports.post = async(req, res, next) => {
    let contract = new ValidationContract();

    contract.hasMinLen(req.body.name, 3, 'O nome deve conter pelo menos 3 caracteres');
    contract.isEmail(req.body.email, 'E-mail inválido');
    contract.hasMinLen(req.body.password, 6, 'A senha deve conter pelo menos 6 caracteres');
    contract.hasMinLen(req.body.address, 3, 'O endereço deve conter pelo menos 3 caracteres');
    
    if (!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
        return;
    }

    try {
        await repository.create(req.body);
        res.status(201).send({
            message: 'Usuário cadastrado com sucesso!'
        });
    } catch(e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

exports.delete = async(req, res, next) => {
    try {
        await repository.delete(req.body.email);
        res.status(200).send({
            message: 'Usuário removido com sucesso!'
        });
    } catch(e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

exports.putUser = async(req, res, next) => {
    try {
        await repository.updateUser(req.params.email, req.body);
        res.status(200).send({
            message: 'Usuário atualizado com sucesso!'
        });
    } catch(e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

exports.putAdmin = async(req, res, next) => {
    try {
        await repository.updateAdmin(req.params.email, req.body);
        res.status(200).send({
            message: 'Usuário atualizado com sucesso!'
        });
    } catch(e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}
