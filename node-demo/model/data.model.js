var mongoose =  require('mongoose');


var nameSchema  = mongoose.Schema({

firstname: String,
lastname: String
});

module.exports =  mongoose.model('User', nameSchema);