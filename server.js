const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

// Require Schemas
const Article = require('./models/Article.js');

var app = express();
var PORT = process.env.PORT || 8080;

// Morgan
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(express.static('./public'));

mongoose.connect('mongodb://heroku_fc9cpcxh:3o9jh5t6d518ufm26mb3mofp16@ds149412.mlab.com:49412/heroku_fc9cpcxh');
const db = mongoose.connection;

db.on('error', function(err){
    console.log('Mongoose Error: ', err);
});

db.once('open', function() {
    console.log('Mongoose connection sucessful.');
});


app.get('/', function(req, res){
    res.sendFile('./public/index.html');
});

app.get('/api/saved', function(req, res){
    Article.find({})
        .exec(function(err, doc){
            if(err){
                console.log(err);
            }
            else {
                res.send(doc);
            }
        })
})

app.post('/api/saved', function(req, res){
    var newArticle = new Article(res.body);

    console.log(res.body);
    var title = req.body.title;
    var date = req.body.date;
    var url = req.body.url;

    newArticle.save(function(err, doc){
        if(err){
            console.log(err);
        } else {
            res.send(doc._id);
        }
    });
});

app.delete('/api/saved/', function(req, res){
    var url = req.param('url');
    Article.find({'url': url}).remove().exec(function(err, data){
        if(err){
            console.log(err);
        } else {
            res.send('deleted');
        }
    })
})



app.listen(PORT, function(){
    console.log('App listening on PORT: ' + PORT);
});