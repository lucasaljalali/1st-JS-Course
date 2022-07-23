const log = console.log;

for(var i = 0; i < 10; i++) { 
    
    log("Repetindo for: " + i);

}

var arr = [1,2,3,4];

for(var j = 0; j < arr.length; j++) {
    log(arr[j])
}

log(arr.length);

for(var x = 5; x < 100; x*= 3) {
    log(x)
}