// import mongoose from 'mongoose';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ArticleSchema = new Schema({
    title:{
        type: String,
    },
    data: {
        type: Date
    },
    url: {
        type: String,
    }
});

var Article = mongoose.model('Article', ArticleSchema);
module.exports = Article;
