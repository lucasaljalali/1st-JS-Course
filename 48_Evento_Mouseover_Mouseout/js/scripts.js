const log = console.log;

//evento mouseover

var title = document.querySelector('#title');

title.addEventListener('mouseover', function() {

    this.style.backgroundColor = 'blue';

});


//criar elemento

var body = document.querySelector('body');
var subtitle = document.querySelector ('#subtitle');

var el = document.createElement('div');

el.textContent = 'este texto foi adicionado pelo JS';

el.classList = 'divCriada';

log(el);

body.insertBefore(el, subtitle);


//evento de mouseout

title.addEventListener('mouseout', function() {

    this.style.backgroundColor = 'none';

});


//afetar outro elemento com mouseover

subtitle.style.display = 'inline-block';

subtitle.addEventListener('mouseover', function() {

    divCriada = document.querySelector('.divCriada');

    divCriada.style.display = 'none';

    divCriada.classList.add ('classCriada')

});

subtitle.addEventListener('mouseout', function() {

    divCriada = document.querySelector('.divCriada');

    divCriada.style.display = 'block';

    divCriada.classList.remove ('classCriada');

});



// só duplicando


//evento mouseover

var title = document.querySelector('#title');

title.addEventListener('mouseover', function() {

    this.style.backgroundColor = 'blue';

});


//criar elemento

var body = document.querySelector('body');
var subtitle = document.querySelector ('#subtitle');

var el = document.createElement('div');

el.textContent = 'este texto foi adicionado pelo JS';

el.classList = 'divCriada';

log(el);

body.insertBefore(el, subtitle);


//evento de mouseout

title.addEventListener('mouseout', function() {

    this.style.backgroundColor = 'none';

});


//afetar outro elemento com mouseover

subtitle.style.display = 'inline-block';

subtitle.addEventListener('mouseover', function() {

    divCriada = document.querySelector('.divCriada');

    divCriada.style.display = 'none';

    divCriada.classList.add ('classCriada')

});

subtitle.addEventListener('mouseout', function() {

    divCriada = document.querySelector('.divCriada');

    divCriada.style.display = 'block';

    divCriada.classList.remove ('classCriada');

});