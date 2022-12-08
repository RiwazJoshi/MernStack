
/* 
    TODO: 1
    create a function generateEvenNumber 
    and if we pass an arguement 10,
    then output should be 2, 4, 6, 8 ,10 

*/
                      // USING BASIC FUNCTION//
// function generateEvenNumber(num) {
//     for (let i = 1; i <= num; i++) {
//         if (i % 2 === 0) {
//             console.log(i);

//         }
//     }
// }
// generateEvenNumber(10)


                       // USING ARROW FUNCTION//
// let evenNumber = (number) => {
//     for (let i = 1; i <= number; i++) {
//         if (i % 2 === 0) {
//             console.log(i);
//         }

//     }
// }
// evenNumber(10)




/* 

    TODO: 2
    create a function identifyEvenNumber
    if we pass an arguement 2, 
    the result should be yes it is an even number

    if we pass an arguement 1, 
    the result should be No it is not an even number

    if we pass an arguement "hello", 
    the result should be the provided data is not an number. 




*/

function identifyEvenNumber(Number) {
    if(Number%2 ===0){
        console.log("Number Is Even");
    }
    else if( Number%2 !==0){
        console.log("Number Is Odd");
    }
    else{
        console.log("provided data is not an number");
    }
    
}
identifyEvenNumber("hello")