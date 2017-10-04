var express = require('express');
var app = express();


app.set('view engine', 'pug');

app.use(express.static('public'))

app.get('/', function (req, res) {
  res.render('index', { title: 'Platzigram'});
});

app.get('/signup', function (req, res){
	res.render('index', { title: 'Platzigram - signup'});
});

app.get('/signin', function (req, res) {
	res.render('index', { title: 'Platzigram - signin'});
});

/*
app.get('/api/pictures', function (req, res) {
	var pictures = [
            {
                user: {
                    username: 'jvilladiegot',
                    avatar: 'https://scontent-mia3-1.xx.fbcdn.net/v/t1.0-9/1898230_1541738819400340_7016464172494712376_n.jpg?oh=bfde6d51c22fd2a791f1743e834c2477&oe=5A485878'
                },
                url: 'office.jpg',
                likes: 0,
                liked: false,
                createAt: new Date()
            },
            {
                user: {
                    username: 'jvilladiegot',
                    avatar: 'https://scontent-mia3-1.xx.fbcdn.net/v/t1.0-9/1898230_1541738819400340_7016464172494712376_n.jpg?oh=bfde6d51c22fd2a791f1743e834c2477&oe=5A485878'
                },
                url: 'office.jpg',
                likes: 2,
                liked: true,
                createAt: new Date().setDate(new Date().getDate() -10)
            },
            {
                user: {
                    username: 'jvilladiegot',
                    avatar: 'https://scontent-mia3-1.xx.fbcdn.net/v/t1.0-9/1898230_1541738819400340_7016464172494712376_n.jpg?oh=bfde6d51c22fd2a791f1743e834c2477&oe=5A485878'
                },
                url: 'office.jpg',
                likes: 8,
                liked: true,
                createAt: new Date().setDate(new Date().getDate() -5)
            }
        ];

    setTimeout(function () {
    	res.send(pictures);
    }, 1000)
    
})

*/


app.listen(3000, function (err) {
  if (err) return console.log('hubo un error'), process.exit(1);

	console.log('platzigram escuchando en el puerto 3000');
});

