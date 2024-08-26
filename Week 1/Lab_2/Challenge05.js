var calcAverage = function (num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
};

var checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins > avgKoalas) {
        console.log(`Dolphins win 🏆 ${avgDolphins} vs. ${avgKoalas}`);
    } else if (avgKoalas > avgDolphins) {
        console.log(`Koalas win 🏆 ${avgDolphins} vs. ${avgKoalas}`);
    } else {
        console.log(`No team wins... 🤷‍♂️ ${avgDolphins} vs. ${avgKoalas}`);
    }
};

// var avgDolphins = calcAverage(44, 23, 71);
// var avgKoalas = calcAverage(65, 54, 49);

var avgDolphins = calcAverage(85, 54, 41);
var avgKoalas = calcAverage(23, 34, 27);

checkWinner(avgDolphins, avgKoalas);