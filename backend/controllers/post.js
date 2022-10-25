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

// Création d'un post
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
      await Post.create(post);
      res.json({ msg: "Publication réussie" });
  } catch (error) {
      res.json({ msg: error.msg });
  }
};

// Modification d'un post
exports.editPost = (req, res, next) => {
    console.log(req.body)
    Post.findOne({_id: req.params.id})
    .then((post) => {
        const oldUrl = post.imageUrl;
        // const postObject = {}
        if (req.file) { 
            post.imageUrl = req.file.filename
        } else {
            post.description = req.body.description,
            post.title = req.body.title
        }            

        if (JSON.stringify(post.userId) !== JSON.stringify(mongoose.Types.ObjectId(req.auth.userId))) {
            res.status(401).json({ message : 'Non autorisé'});
        } else {
                if(req.file) {
                    let splitUrl = oldUrl;

                    fs.unlink(`images/${splitUrl}`, () => {
                        Post.updateOne({ _id: req.params.id }, post)
                            .then(() => res.status(200).json({ message: 'Post modifié !' }))
                            .catch(error => res.status(400).json({ message : 'Impossible de modifier le post' }));
                        });
                    } else {
                        Post.updateOne({ _id: req.params.id}, post)
                        .then(() => res.status(200).json({message : 'Post modifié !'}))
                        .catch(error => res.status(401).json({ message : 'Impossible de modifier le post' }));
                    }
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
// exports.likePost = (req, res, next) => {
//   let postId = req.params.id
//   let userId = req.body.userId
//   let like = req.body.like

//   switch(like) {
//     // Si like = 1, l'utilisateur aime (= likes)
//     case 1 : 
//     Post.updateOne(
//       { _id: postId }, 
//       {
//         $push : { usersLiked: userId },
//         $inc : { likes: +1 }
//       }
//     )  
//       .then(() => res.status(200).json({message: "J'aime"}))
//       .catch((error) => res.status(400).json({ error }));

//     break;

//     // Si like = 0, l'utilisateur annule son like 
//     case 0 :
//       Post.findOne(
//         { _id: postId }
//       )
//       .then((post) => {
//         if (post.usersLiked.includes(userId)) {
//           Post.updateOne(
//             { _id: postId },
//             {
//               $pull: { usersLiked: userId },
//               $inc: { likes: -1 }
//             }
//           )
//             .then(() => res.status(200).json({message: "Unliked"}))
//             .catch((error) => res.status(400).json({ error }))
//         }
//       })
//       .catch((error) => res.status(404).json({ error }))
  
//     break;
//   }
// };

exports.likePost = (req, res, next) => {

  Post.findOne({ _id: req.body._id })
      .then(post => {
          if (!post.usersLiked.includes(req.body.userId) && req.body.likes === 1) {
              Post.updateOne({ _id: req.body._id }, { $inc: { likes: 1 }, $push: { usersLiked: req.body.userId } })
                  .then(() => res.status(200).json({ message: "J'aime !" }))
                  .catch(error => res.status(400).json({ error }));
          }
          if (post.usersLiked.includes(req.body.userId) && req.body.likes === -1) {
              Post.updateOne({ _id: req.body._id }, { $inc: { likes: -1 }, $pull: { usersLiked: req.body.userId } })
                  .then(() => res.status(200).json({ message: "Je n'aime plus !" }))
                  .catch(error => res.status(400).json({ error }));
          }
      })
      .catch(error => res.status(500).json({ error }));
};