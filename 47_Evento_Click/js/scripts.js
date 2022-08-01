const log = console.log;


//inserir click

var btn = document.querySelector('#btn');

log(btn);

btn.addEventListener('click', function() {
    
    log('clicou');

    log(this);

    this.style.color = 'red';

});


var title = document.querySelector('#title');

title.addEventListener('click', function() {

    log('teste');

    var subtitle = document.querySelector('#subtitle');

    subtitle.style.backgroundColor = 'red';

});


//double click

var subtitle = document.querySelector('#subtitle');

subtitle.addEventListener('dblclick', function() {

    log('click duplo!');

});


//só duplicar 
var btn = document.querySelector('#btn');

log(btn);

btn.addEventListener('click', function() {
    
    log('clicou');

    log(this);

    this.style.color = 'red';

});


var title = document.querySelector('#title');

title.addEventListener('click', function() {

    log('teste');

    var subtitle = document.querySelector('#subtitle');

    subtitle.style.backgroundColor = 'red';

});


//double click

var subtitle = document.querySelector('#subtitle');

subtitle.addEventListener('dblclick', function() {

    log('click duplo!');

});

var btn = document.querySelector('#btn');

log(btn);

btn.addEventListener('click', function() {
    
    log('clicou');

    log(this);

    this.style.color = 'red';

});


var title = document.querySelector('#title');

title.addEventListener('click', function() {

    log('teste');

    var subtitle = document.querySelector('#subtitle');

    subtitle.style.backgroundColor = 'red';

});


//double click

var subtitle = document.querySelector('#subtitle');

subtitle.addEventListener('dblclick', function() {

    log('click duplo!');

});



