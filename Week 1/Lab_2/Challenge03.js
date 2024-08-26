
var avg = function (a, b, c) {
    return (a + b + c) / 3;
}

var compareAvg  = function (dolphins, koalas) {
    if( dolphins > koalas) {
        if(dolphins >= 100) {
            console.log(`Dolphins win with ${dolphins.toFixed(2)} points!`);
        } else {
            console.log(`Dolphins win but not bonus with ${dolphins.toFixed(2)} points!`);
        }
    } else if (dolphins == koalas) {
        if (dolphins >= 100 && koalas >= 100) {
            console.log(`It's a tie with ${dolphins.toFixed(2)} points!`);
        } else {
            console.log(`It's a tie but no bonus with ${dolphins.toFixed(2)} points!`);
        }
    } else {
        if(koalas >= 100) {
            console.log(`Koalas win with ${koalas.toFixed(2)} points!`);
        } else {
            console.log(`Koalas win but not bonus with ${koalas.toFixed(2)} points!`);
        }
    }
}

// var dolphins = avg(96, 108, 89);
// var koalas = avg(88, 91, 110);

// var dolphins = avg(97, 112, 101);
// var koalas = avg(109, 95, 123);

var dolphins = avg(97, 112, 101);
var koalas = avg(109, 95, 106);

compareAvg(dolphins, koalas);