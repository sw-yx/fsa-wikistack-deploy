var express = require('express');
var nunjucks = require('nunjucks');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var app = express();
var wikiRouter = require('./routes/wiki');
var usersRouter = require('./routes/users');

var env = nunjucks.configure('views', { noCache: true });
app.engine('html', nunjucks.render);
app.set('view engine', 'html');

var AutoEscapeExtension = require("nunjucks-autoescape")(nunjucks);
env.addExtension('AutoEscapeExtension', new AutoEscapeExtension(env));

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/public'));

app.use('/wiki', wikiRouter);
app.use('/users', usersRouter);

app.get('/', function (req, res) {
    var readme = require('fs').readFileSync(__dirname + '/README.md')
    console.log('readme', readme.toString())
    res.render('landingpage', {
        readmeContent: require('marked')(readme.toString())
    });
});

app.use(function (err, req, res, next) {
    console.error(err);
    res.status(err.status || 500).send(err.message);
});

module.exports = app;
