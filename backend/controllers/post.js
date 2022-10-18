const Post = require('../models/post');
const User = require("../models/user");
const fs = require('fs');

const mongoose = require('mongoose');


// Recupération de tous les posts
exports.getAllPost = async (req, res, next) => {
  result = []

  let posts = await Post.find().sort({ createAt: -1 })

  for (let i = 0; i < posts.length; i++) {
    let user = await User.findOne({ _id: posts[i].userId })
    result.push({post: posts[i], user: user})
  }
  res.status(200).json(result)
};

// Recupération d'un post
exports.getOnePost = (req, res, next) => {
  Post.findOne({_id: req.params.id})
  .then((post) => res.status(200).json(post))
  .catch((error) => res.status(404).json({error: error}));
};

exports.createPost = async (req, res, next) => {
  try {
      const userId = req.body.userId;
      const post = req.file ?
          {
              ...req.body,
              userId: userId,
              imageUrl: req.file.filename,
              likes: 0,
              usersLiked: [],
          } : {
              ...req.body,
              userId: userId,
              likes: 0,
              usersLiked: [],
          };
          console.log(req.file)
      await Post.create(post);
      res.json({ msg: "Publication réussie" });
  } catch (error) {
      res.json({ msg: error.msg });
  }
};

// Modification d'un post
exports.editPost = (req, res, next) => {
  // const postObject = req.file ? {
  //     ...JSON.parse(req.body.post),
  //     imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
  // } : { ...req.body };

  // delete postObject._userId;
  Post.findOne({_id: req.params.id})
      .then((post) => {
          if (JSON.stringify(post.userId) !== JSON.stringify(mongoose.Types.ObjectId(req.auth.userId))) {
              res.status(401).json({ message : 'Non autorisé'});
          } else {
              Post.updateOne({ _id: req.params.id}, { title: req.body.title, description: req.body.description })
              .then(() => res.status(200).json({message : 'Post modifié !'}))
              .catch(error => res.status(401).json({ message : 'Impossible de modifier le post' }));
          }
      })
      .catch((error) => {
          res.status(400).json({ error });
      });
};

// Suppression d'un post
exports.deletePost = (req, res, next) => {
  Post.findOne({ _id: req.params.id})
      .then(post => {
          if (post.userId != req.auth.userId) {
              res.status(401).json({message: 'Non autorisé'});
          } else {
              // const filename = post.file.split('/images/')[1];
              // fs.unlink(`images/${filename}`, () => {
                  Post.deleteOne({_id: req.params.id})
                      .then(() => res.status(200).json({message: 'Post supprimé !'}))
                      .catch(error => res.status(401).json({ message : 'Impossible de supprimer le post' }));
              // });
          }
      })
      .catch( error => {
          res.status(500).json({ error });
      });
};

// Like d'un post
exports.likePost = (req, res, next) => {
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