const mongoose = require("mongoose");

const favoriteMovieSchema = mongoose.Schema({
  movie_id: String,
  timestamp: String,
});

module.exports = mongoose.model("favoriteMovie", favoriteMovieSchema);
