//javascript Task(Task 2 & 3)
//mohammad injass
//mohinjass18@gmail.com


//start task 2
function calculateSum(numbers) {
    //calculate sum used reduce method
    return  numbers.reduce((accumulator, current) => accumulator + current, 0);
}
function calculateAverage(numbers , sum) {
    return sum / numbers.length ;
}

//example_1_t2
const num_1 = [10, 20, 30, 40, 50];
const sum_1 = calculateSum(num_1);
const average_1 = calculateAverage(num_1, sum_1);

console.log("example 1 for Task 2");
console.log("sum:", sum_1); //sum: 10+20+30+40+50=150
console.log("average:",average_1); //average: 150/5=30
//example_2_t2
console.log("example 1 for Task 2");
const num_2 = [10, 2, 3,];
const sum_2 = calculateSum(num_2);
const average_2 = calculateAverage(num_2, sum_2);

console.log("sum:", sum_2); //sum: 10+2+3=15
console.log("average:", average_2); //average: 15/3=5
//end task 2

// *************************************************************************
// *************************************************************************
// *************************************************************************

//start task 3
function removeDuplicatesFromArray(strings) {
    //used Set 
    const uniqueStrings = new Set(strings);
    //convert the Set to array
    let uniqueStringsArray = [...uniqueStrings]
    return uniqueStringsArray;
}

//example_1_t3
console.log("example 1 for Task 3");
const strings_1 = ["apple", "banana", "apple", "orange", "banana", "grape"];
const uniqueStrings_1 = removeDuplicatesFromArray(strings_1);
console.log("Unique Strings:", uniqueStrings_1);
//example_1_t3
console.log("example 2 for Task 3");
const strings_2 = ["mohammad", "yousef", "mohammad", "ahmad", "injass", "yousef"];
const uniqueStrings_2 = removeDuplicatesFromArray(strings_2);
console.log("Unique Strings:", uniqueStrings_2);

//end task 3