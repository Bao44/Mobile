// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:

// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall.

var markMass = 78;
var markHeight = 1.69;

var johnMass = 92;
var johnHeight = 1.95;

function calculateBMI_Version1(mass, height) {
    return mass / height ** 2;
}
var markHigherBMI_Version1 = calculateBMI_Version1(markMass, markHeight) > calculateBMI_Version1(johnMass, johnHeight);

if(markHigherBMI_Version1) {
    console.log('Mark has a higher BMI than John.');
} else {
    console.log('John has a higher BMI than Mark.');
}