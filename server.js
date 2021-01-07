const express = require('express');
const app = express();
const bodyParser = require('body-parser');


var multer  = require('multer');
// var upload = multer({ dest: 'uploads/' })
var upload = multer();

app.use(express.static('./static/'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/teste', upload.none(), (req,res) => {
	console.log(req.body);
	res.status(401).json({
		error: false,
		msg: 'Deu boa aqui'
	});
});

app.get('/', (req,res) => {
	res.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => {
	console.log('rodando...');
});

module.exports = () => app;