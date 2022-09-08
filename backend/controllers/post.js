const Post = require('../models/post');
const User = require("../models/user");
const fs = require('fs');


// Affichage de tous les posts
exports.getAllPost = (req, res, next) => {
  Post.find()
  .then((post) => res.status(200).json(post))
  .catch((error) => res.status(400).json({error: error}));
};

// Affichage d'un post
exports.getOnePost = (req, res, next) => {
  Post.findOne({_id: req.params.id})
  .then((post) => res.status(200).json(post))
  .catch((error) => res.status(404).json({error: error}));
};

// Création d'un post
exports.createPost = (req, res, next) => {
  const postObject = JSON.parse(req.body.post);
  delete postObject._id;
  delete postObject._userId;
  const post = new Post({
      ...postObject,
      userId: req.auth.userId,
      imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
      likes: 0,
      usersLiked: [""], 
  });

  post.save()
  .then(() => res.status(201).json({message: 'Post enregistré !'}))
  .catch(error => res.status(400).json( { error }))
};

// Modification d'un post
exports.modifyPost = (req, res, next) => {
  const postObject = req.file ? {
      ...JSON.parse(req.body.post),
      imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
  } : { ...req.body };

  delete postObject._userId;
  Post.findOne({_id: req.params.id})
      .then((post) => {
          if (post.userId != req.auth.userId) {
              res.status(401).json({ message : 'Non autorisé'});
          } else {
              Post.updateOne({ _id: req.params.id}, { ...postObject, _id: req.params.id})
              .then(() => res.status(200).json({message : 'Post modifié !'}))
              .catch(error => res.status(401).json({ error }));
          }
      })
      .catch((error) => {
          res.status(400).json({ error });
      });
};

// Suppréssion d'une post
exports.deletePost = (req, res, next) => {
  Post.findOne({ _id: req.params.id})
      .then(post => {
          if (post.userId != req.auth.userId) {
              res.status(401).json({message: 'Non autorisé'});
          } else {
              const filename = post.imageUrl.split('/images/')[1];
              fs.unlink(`images/${filename}`, () => {
                  Post.deleteOne({_id: req.params.id})
                      .then(() => res.status(200).json({message: 'Post supprimé !'}))
                      .catch(error => res.status(401).json({ error }));
              });
          }
      })
      .catch( error => {
          res.status(500).json({ error });
      });
};

// Like d'un post
exports.postLikes = (req, res, next) => {
  let postId = req.params.id
  let userId = req.body.userId
  let like = req.body.like

  switch(like) {
    // Si like = 1, l'utilisateur aime (= likes)
    case 1 : 
    Post.updateOne(
      { _id: postId }, 
      {
        $push : { usersLiked: userId },
        $inc : { likes: +1 }
      }
    )  
      .then(() => res.status(200).json({message: "J'aime"}))
      .catch((error) => res.status(400).json({ error }));

    break;

    // Si like = 0, l'utilisateur annule son like 
    case 0 :
      Post.findOne(
        { _id: postId }
      )
      .then((post) => {
        if (post.usersLiked.includes(userId)) {
          Post.updateOne(
            { _id: postId },
            {
              $pull: { usersLiked: userId },
              $inc: { likes: -1 }
            }
          )
            .then(() => res.status(200).json({message: "Unliked"}))
            .catch((error) => res.status(400).json({ error }))
        }
      })
      .catch((error) => res.status(404).json({ error }))
  
    break;
  }
};