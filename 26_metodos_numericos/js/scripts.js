const log = console.log;

//parseFloat 10.0

log(parseFloat('12.999'));
log(Number.parseFloat('12.999'));

//parseInt

log(parseInt('10'));
log(parseInt(16.96));

//toFixed

log(23.51515165.toFixed(1));

//isNaN

log(isNaN('teste'));
log(isNaN(12));
log(isNaN('14'));

//MAX_VALUE e MIN_VALUE

log(Number.MAX_VALUE);
log(Number.MIN_VALUE);