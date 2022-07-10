'use strict';

const ValidationContract = require('../validators/fluent-validator');
const repository = require('../repositories/user');

/*
 * Busca um usuário no banco de dados pelo email e senha
 * e retorna se o usuário existe ou não
 */
exports.authenticate = async(req, res, next) => {
    try {
        const user = await repository.authenticate(req.body);
        if (user === null) {
            res.status(404).send({
                message: 'Usuário ou senha inválidos'
            });
            return;
        }
        res.status(200).send(user);
    }
    catch (e) {
        res.status(401).send({
            message: 'Falha na autenticação'
        });
    }
}

/*
 * Busca todos os usuários cadastrados no banco de dados
 */
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

/*
 * Busca um usuário no banco de dados pelo email
 */
exports.getByEmail = async(req, res, next) => {
    try {
        const data = await repository.getByEmail(req.params.email);
        res.status(200).send(data);
    } catch (e) {
        res.status(404).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

/*
 * Insere um novo usuário no banco de dados, fazendo algumas validações
 * antes de inserir
 */
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

/*
 * Remove um usuário do banco de dados, buscando-o pelo id
 */
exports.delete = async(req, res, next) => {
    try {
        await repository.delete(req.params.id);
        res.status(200).send({
            message: 'Usuário removido com sucesso!'
        });
    } catch(e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

/*
 * Altera as informações de um usuário no banco de dados,
 * buscando-o pelo email
 */
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

/*
 * Altera as informações de um usuário no banco de dados,
 * buscando-o pelo id
 * 
 * Altera, também, as permissões do usuário
 */
exports.putAdmin = async(req, res, next) => {
    try {
        await repository.updateAdmin(req.params.id, req.body);
        res.status(200).send({
            message: 'Usuário atualizado com sucesso!'
        });
    } catch(e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}