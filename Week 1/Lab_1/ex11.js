// 11. Calculate the average of the numbers in an array of numbers 

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var temp = 0;

for (var i = 0 ; i < array.length; i++) {
    temp += array[i];
}

var avg = temp / array.length;

console.log(avg);