//Set up dependencies
var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars')

var app = express();

app.engine('handlebars', exphbs( {defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


//Routing
app.get('/', (req, res) => {
	res.render('index', { 
		title: 'Eat Da Burger',
		name: 'Andrea',
		isEaten: true
	 });
});

var PORT = process.env.PORT || 3002;

app.listen(PORT,  () =>
console.log('Server is running on PORT ', 3002 || PORT));