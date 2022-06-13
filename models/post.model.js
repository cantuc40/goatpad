//Import mongoose library and Schema function
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Issue Schema
const postSchema = new Schema({
    title: String,

});


//Issue model is initialized from the schema
const Post = mongoose.model("Post", postSchema);

//Export module
module.exports = Post;