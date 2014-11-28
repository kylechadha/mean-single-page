var mongoose = require('mongoose');

// Schema
// ----------------------------------------------

var affirmationSchema = mongoose.Schema({

  text : String,
  category : String

});

module.exports = mongoose.model('Affirmation', affirmationSchema);
