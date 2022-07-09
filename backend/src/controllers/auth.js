'use strict';

const repository = require('../repositories/user');
const authService = require('../services/auth');

/*
 * Realiza a autenticação do usuário
 * Se as informações não baterem, retorna um erro
 * Se as informações baterem, cria um token e o retorna
 * com outras informações do usuário
 */
exports.authenticate = async(req, res, next) => {
    try {
        const user = await repository.authenticate({
            email: req.body.email,
            password: req.body.password
        });

        if (!user) {
            res.status(404).send({
                message: 'Usuário ou senha inválidos'
            });
            return;
        }

        const token = await authService.generateToken({
            id: user._id,
            email: user.email,
            name: user.name,
            admin: user.admin
        });

        res.status(201).send({
            token: token,
            email: user.email,
            name: user.name,
            admin: user.admin,
            id: user._id
        });
        
    } catch(e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}