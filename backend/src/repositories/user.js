'use strict';

const mongoose = require('mongoose');
const User = mongoose.model('User');

/*
 * Busca no banco de dados todos os usuários
 * Retorna as informações desses usuários
 */
exports.getAll = async() => {
    const res = await User.find(
        {},
        'name email admin phone address'
    );

    return res;
}

/*
 * Busca no banco de dados um usuário pelo email
 * Retorna as informações do usuário
 */
exports.getByEmail = async(email) => {
    const res = await User.findOne(
        { email: email },
        '_id name email admin phone address'
    );

    return res;
}

/*
 * Insere no banco de dados um novo usuário
 */
exports.create = async(data) => {
    const user = new User(data);
    await user.save();
}

/*
 * Busca no banco de dados um usuário pelo email
 * Realiza o delete do usuário
 */
exports.delete = async(id) => {
    await User.findByIdAndRemove(id);
}

/*
 * Busca no banco de dados um usuário pelo email
 * Realiza o update do usuário com os dados passados
 * Não altera o campo admin
 */
exports.updateUser = async(email, data) => {
    await User.findOneAndUpdate({ email: email }, {
        $set: {
            name: data.name,
            address: data.address,
            phone: data.phone
        }
    });
}

/*
 * Busca no banco de dados um usuário pelo email
 * Realiza o update do usuário com os dados passados
 * Altera, também, o campo admin
 */
exports.updateAdmin = async(id, data) => {
    await User.findByIdAndUpdate(id, {
        $set: {
            name: data.name,
            email: data.email,
            phone: data.phone,
            address: data.address,
            admin: data.admin
        }
    });
}

/*
 * Busca no banco de dados um usuário pelo email e senha, verificando se conferem
 */
exports.authenticate = async(data) => {
    const res = await User.findOne({
        email: data.email, password: data.password
    }, '-__v -password');
    return res;
}
