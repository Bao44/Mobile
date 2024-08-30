
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];
var sum = 0;

function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
}

for (let i = 0; i < bills.length; i++) {

    sum += bills[i];

    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}

function calcAverage(arr) {
    return sum / arr.length;
}

console.log(calcAverage(bills));

console.log(totals);



