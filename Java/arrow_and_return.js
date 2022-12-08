//basic function stntax
//  function functionName( number) {
//     console.log(`execute a task  ${number}`);

//  }
//  functionName(1)
//  functionName(2)
//  functionName(3)


//arrowFunction

//arrowFunctionSyntax
// let sum=(num1 ,num2)  => {
//     console.log("Sum Of Given Numbers Is" + " "+ ( num1 + num2));
// }
//  sum(1,2 );

//Using Return In Basic Function Syntax

// function sum(num,num2) {
//     let sum_is = num + num2
//     return sum_is; 
// }
// let sum_is= sum(9,8)
// console.log({sum_is});

// Using Return In Arrow Function Syntax

let sum = (firstNumber, secondNumber) => {
    return firstNumber + secondNumber
}
let result = sum(5, 6)
console.log({ result });



