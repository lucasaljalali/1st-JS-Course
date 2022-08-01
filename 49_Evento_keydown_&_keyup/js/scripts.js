const log = console.log;

//keydown

document.addEventListener('keydown', function(event) {

    if(event.key === 'Enter') {

        log('Apertou Enter');

    }

});



//keyup

document.addEventListener('keyup', function(event) {

    if(event.key === 'Enter') {

        log('Soltou Enter');

    }

});