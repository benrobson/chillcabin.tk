//
// Project Dependencies
//
const express = require('express');
const bodyParser = require('body-parser');
const chalk = require('chalk');
const ejs = require('ejs');

//
// Constants
//
const app = express();
const urlencodedParser = bodyParser.urlencoded({ extended: false });
var obj = {};
var session;

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static('public'));

//
// Homepage
//
app.get('/', function (req, res) {
  res.render('index');
});

//
// Application Boot
//
app.listen(process.env.PORT || '8080');
console.log(chalk.yellow('[CONSOLE] ' ) + 'Application is listening to the port ' + '8080');
