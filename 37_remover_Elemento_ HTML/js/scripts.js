const log = console.log;

//removendo elemento filho

var container = document.querySelector('#container');

var p = document.querySelector('#container p');

container.removeChild(p);


//removendo o elemento em si

var subtitle = document.querySelector('#subtitle');

subtitle.remove();