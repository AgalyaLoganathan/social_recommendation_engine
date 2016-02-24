var express = require('express')
    , http = require('http')
    , path = require('path')
    , bodyParser = require('body-parser');

var app = express();
var router = express.Router();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/post1', function(req, res){
    var files = {}
    var fs = require('fs');
    var path = require('path');
    var postLoc = 'results/post1';
    for(var i = 1; i <= 10; i++) {
            var postId = 'post_' + i;
            var fileLoc = i+'.txt';
            var filePath = path.join(postLoc,  fileLoc);
            files[postId] = fs.readFileSync(filePath,{ encoding: 'utf8' });
    }
    res.render('post1.ejs', files);
});

app.get('/post2', function(req, res){
    var files = {}
     var fs = require('fs');
    var path = require('path');
    var postLoc = 'results/post2';
    for(var i = 1; i <= 10; i++) {
            var postId = 'post_' + i;
            var fileLoc = i+'.txt';
            var filePath = path.join(postLoc,  fileLoc);
            files[postId] = fs.readFileSync(filePath,{ encoding: 'utf8' });
    }
    res.render('post2.ejs', files);
});

app.get('/post3', function(req, res){
        var files = {}
     var fs = require('fs');
    var path = require('path');
    var postLoc = 'results/post3';
    for(var i = 1; i <= 10; i++) {
            var postId = 'post_' + i;
            var fileLoc = i+'.txt';
            var filePath = path.join(postLoc,  fileLoc);
            files[postId] = fs.readFileSync(filePath,{ encoding: 'utf8' });
    }
    res.render('post3.ejs', files);
});

app.get('/post4', function(req, res){
            var files = {}
     var fs = require('fs');
    var path = require('path');
    var postLoc = 'results/post4';
    for(var i = 1; i <= 10; i++) {
            var postId = 'post_' + i;
            var fileLoc = i+'.txt';
            var filePath = path.join(postLoc,  fileLoc);
            files[postId] = fs.readFileSync(filePath,{ encoding: 'utf8' });
    }
    res.render('post4.ejs', files);
});
app.get('/post5', function(req, res){
            var files = {}
     var fs = require('fs');
    var path = require('path');
    var postLoc = 'results/post5';
    for(var i = 1; i <= 10; i++) {
            var postId = 'post_' + i;
            var fileLoc = i+'.txt';
            var filePath = path.join(postLoc,  fileLoc);
            files[postId] = fs.readFileSync(filePath,{ encoding: 'utf8' });
    }
    res.render('post5.ejs', files);
});
app.get('/post6', function(req, res){
            var files = {}
     var fs = require('fs');
    var path = require('path');
    var postLoc = 'results/post6';
    for(var i = 1; i <= 10; i++) {
            var postId = 'post_' + i;
            var fileLoc = i+'.txt';
            var filePath = path.join(postLoc,  fileLoc);
            files[postId] = fs.readFileSync(filePath,{ encoding: 'utf8' });
    }
    res.render('post6.ejs', files);
});
app.get('/post7', function(req, res){
        var files = {}
     var fs = require('fs');
    var path = require('path');
    var postLoc = 'results/post7';
    for(var i = 1; i <= 10; i++) {
            var postId = 'post_' + i;
            var fileLoc = i+'.txt';
            var filePath = path.join(postLoc,  fileLoc);
            files[postId] = fs.readFileSync(filePath,{ encoding: 'utf8' });
    }
    res.render('post7.ejs', files);
});
app.get('/post8', function(req, res){
         var files = {}
     var fs = require('fs');
    var path = require('path');
    var postLoc = 'results/post8';
    for(var i = 1; i <= 10; i++) {
            var postId = 'post_' + i;
            var fileLoc = i+'.txt';
            var filePath = path.join(postLoc,  fileLoc);
            files[postId] = fs.readFileSync(filePath,{ encoding: 'utf8' });
    }
    res.render('post8.ejs', files);
});
app.get('/post9', function(req, res){
          var files = {}
     var fs = require('fs');
    var path = require('path');
    var postLoc = 'results/post9';
    for(var i = 1; i <= 10; i++) {
            var postId = 'post_' + i;
            var fileLoc = i+'.txt';
            var filePath = path.join(postLoc,  fileLoc);
            files[postId] = fs.readFileSync(filePath,{ encoding: 'utf8' });
    }
    res.render('post9.ejs', files);
});

app.get('/post10', function(req, res){
            var files = {}
     var fs = require('fs');
    var path = require('path');
    var postLoc = 'results/post10';
    for(var i = 1; i <= 10; i++) {
            var postId = 'post_' + i;
            var fileLoc = i+'.txt';
            var filePath = path.join(postLoc,  fileLoc);
            files[postId] = fs.readFileSync(filePath,{ encoding: 'utf8' });
    }
    res.render('post10.ejs', files);
});

app.get('/', function(req, res){
    res.render('dashboard.ejs');
});

app.get('/explanation', function(req, res){
    res.render('explanation.ejs');
});


http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});

