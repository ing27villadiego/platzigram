var page = require('page');
var emty = require('empty-element'); 
var template = require('./template');
var title = require('title');
var request = require('superagent');
var axios = require('axios');

page('/' , function (ctx, next){
	title('Platzigram')
    var main = document.getElementById('main-container');

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
    
    emty(main).appendChild(template(pictures));        

})

/*
function loadPicturesAxios(ctx, next) {
    axios
        .get('/api/pictures')
        .then(function (res) {
            ctx.pictures = res.data;
            next();
        })
        .catch(function (err) {
            console.log(err);
        })
}

*/
