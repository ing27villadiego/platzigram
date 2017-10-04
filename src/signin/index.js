var page = require('page');
var emty = require('empty-element'); 
var template = require('./template');
var title = require('title');

page('/signin', function (ctx, next){
	title('Platzigram - Signin')
    var main = document.getElementById('main-container');
    emty(main).appendChild(template);        

})