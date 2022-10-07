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
    User.findOne({_id: req.params.id})
    .then((user) => res.status(200).json(user))
    .catch((error) => res.status(404).json({error: error}));
    };

// Suppression d'un user
exports.deleteUser = (req, res, next) => {
    User.findOne({ _id: req.params.id})
        .then(user => {
            if (user.userId != req.auth.userId) {
                res.status(401).json({message: 'Non autorisé'});
            } else {
                User.deleteOne({_id: req.params.id})
                .then(() => res.status(200).json({message: 'Utilisateur supprimé !'}))
                .catch(error => res.status(401).json({ error }));
            }
        })
        .catch( error => {
            res.status(500).json({ error });
        });
    };