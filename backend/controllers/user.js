const User = require("../models/user");
const fs = require('fs');
const user = require("../models/user");

// Recupération de tous les users
exports.getAllUsers = (req, res, next) => {
    User.find()
    .then((user) => res.status(200).json(user))
    .catch((error) => res.status(400).json({error: error}));
    };

// Recupération d'un user
exports.getOneUser = (req, res, next) => {
    // User.findOne({_id: req.params.id})
    User.findOne({
        attributes: ['lastName', 'firstName', 'id', 'email'],
        where: { id: req.params.id }
    })
    .then((user) => res.status(200).json(user))
    .catch((error) => res.status(404).json({error: error}));
    };

// Suppression d'un user
exports.deleteUser = (req, res, next) => {
    User.findOne({ _id: req.params.id})
    .then(user => {
        User.deleteOne({ where: { _id: req.params.id}, force: true})
        .then(() => res.status(200).json({message: 'Utilisateur supprimé !'}))
        .catch(err => res.status(500).json({ message: 'Database Error', error: err }))
    })
        .catch( error => {
            res.status(500).json({ error });
        });
}