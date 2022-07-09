'use strict';

const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.getAll = async() => {
    const res = await User.find(
        {},
        'name email admin phone address'
    );

    return res;
}

exports.getByEmail = async(email) => {
    const res = await User.findOne(
        { email: email },
        'name email admin phone address'
    );

    return res;
}

// precisar verificar se o email ja existe???
exports.create = async(data) => {
    const user = new User(data);
    await user.save();
}

exports.delete = async(email) => {
    await User.findOneAndRemove({ email: email });
}

exports.updateUser = async(email, data) => {
    await User.findOneAndUpdate({ email: email }, {
        $set: {
            name: data.name,
            email: data.email,
            password: data.password,
            phone: data.phone,
            address: data.address
        }
    });
}

exports.updateAdmin = async(email, data) => {
    await User.findOneAndUpdate({ email: email }, {
        $set: {
            name: data.name,
            email: data.email,
            password: data.password,
            phone: data.phone,
            address: data.address,
            admin: data.admin
        }
    });
}

exports.authenticate = async(data) => {
    const res = await User.findOne({
        email: data.email, password: data.password
    });
    return res;
}
