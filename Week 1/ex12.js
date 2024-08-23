// 12. Create a function that receives an array of numbers as argument and returns an array containing only the positive numbers 

var array = [-1, 2, -3, 4, -5, 6, -7, 8, -9, 10];

var func = function(array) {
    var newArr = [];

    for (var i = 0 ; i < array.length; i++) {   
        if (array[i] > 0) {
            newArr.push(array[i]);
        }
    }

    return newArr;
}

console.log(func(array));