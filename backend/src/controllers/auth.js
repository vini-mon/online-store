'use strict';

const repository = require('../repositories/user');
const authService = require('../services/auth');

exports.authenticate = async(req, res, next) => {
    // let contract = new ValidationContract();

    // contract.hasMinLen(req.body.name, 3, 'O nome deve conter pelo menos 3 caracteres');
    // contract.isEmail(req.body.email, 'E-mail inválido');
    // contract.hasMinLen(req.body.password, 6, 'A senha deve conter pelo menos 6 caracteres');
    // contract.hasMinLen(req.body.address, 3, 'O endereço deve conter pelo menos 3 caracteres');
    
    // if (!contract.isValid()) {
    //     res.status(400).send(contract.errors()).end();
    //     return;
    // }

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