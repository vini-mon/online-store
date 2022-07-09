'use strict';

const jwt = require('jsonwebtoken');

/*
 * Gera um token de acesso encriptado com duração de 30 dias
 */
exports.generateToken = async(data) => {
    return jwt.sign(data, global.SALT_KEY, { expiresIn: '30d' });
}

/*
 * Decripta o token, retornando as informações nele contidas
 */
exports.decodeToken = async(token) => {
    let data = await jwt.verify(token, global.SALT_KEY);
    return data;
}

/*
 * Busca o pelo token no body, query ou header
 * Se não houver token, acesso restrito
 * Se houver token, verifica se é válido
 * Se não for válido, token inválido
 * Se for válido, prossegue
 */
exports.authorize = function(req, res, next) {
    let token = req.body.token || req.query.token || req.headers['x-access-token'];

    if (!token) {
        return res.status(401).json({
            message: 'Acesso restrito'
        });
    } else {
        jwt.verify(token, global.SALT_KEY, function(err, decoded) {
            if (err) {
                return res.status(401).json({
                    message: 'Token inválido'
                });
            } else {
                next();
            }
        });
    }
}

/*
 * Busca o pelo token no body, query ou header
 * Se não houver token, acesso restrito
 * Se houver token, verifica se é válido
 * Se não for válido, token inválido
 * Se for válido, verifica se o usuário é admin
 * Se não for admin, acesso restrito
 * Se for admin, prossegue
 */
exports.isAdmin = function(req, res, next) {
    let token = req.body.token || req.query.token || req.headers['x-access-token'];

    if (!token) {
        return res.status(401).json({
            message: 'Acesso restrito'
        });
    } else {
        jwt.verify(token, global.SALT_KEY, function(err, decoded) {
            if (err) {
                return res.status(401).json({
                    message: 'Token inválido'
                });
            } else {
                if (decoded.admin === true) {
                    next();
                } else {
                    res.status(401).json({
                        message: 'Acesso restrito a administradores'
                    });
                }
            }
        });
    }
}