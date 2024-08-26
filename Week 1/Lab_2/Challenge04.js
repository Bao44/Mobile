
var tip;

var bill = function (arr) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

var tipCalculator = function (total) {
    if (total >= 50 && total <= 300) {
        tip = total * 0.15;
    } else {
        tip = total * 0.2;
    }
    return tip;
}

var bills = [275, 0, 0];

var tips = tipCalculator(bill(bills));

console.log(`The bill was ${bill(bills)}, the tip was ${tips.toFixed(2)}, and the total value ${bill(bills) + tips}`);