const express = require('express');
const app = express();
const bodyParser = require('body-parser');


var multer  = require('multer');
// var upload = multer({ dest: 'uploads/' })
var upload = multer();

app.use(express.static('./static/'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// app.post('/teste', (req,res,next) => {
// 	console.log('Isso é um middleware?');
// 	next;
// }, (req,res) => {
// 	console.log(req.body.nome);
// 	res.send('teste');
// });

app.post('/teste', upload.single('foto'), (req,res) => {
	console.log(req.body);
	res.send('teste');
});

app.get('/', (req,res) => {
	res.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => {
	console.log('rodando...');
});

module.exports = () => app;