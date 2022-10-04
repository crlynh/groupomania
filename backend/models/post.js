
// importation de mongoose
const mongoose = require('mongoose');

// models: données utilisateur pour le page du frontend
const postSchema = mongoose.Schema({
  userId: { type: String },
  title: { type: String, required: true },
  description: { type: String },
  imageUrl: { type: String },

  // système de like 
  likes: { type: Number, defaut: 0 },
  usersLiked: { type: [String] },
  
});

// exportation du module
module.exports = mongoose.model('Post', postSchema);