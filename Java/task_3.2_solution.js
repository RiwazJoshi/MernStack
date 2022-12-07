



/* 
    case sensitivity in object keys. 
*/
let obj = {
    name: "Ram",
    Name: "shyam"
}

console.log(obj.name); // what will it print
console.log(obj.Name); // what will it print

// The output will be 
// Ram 
// shyam


/* 

what if we want to  change the value of our keys. 

*/

let newName ={
    firstNewName:"john doe",
}
console.log(newName.firstNewName);
/* 

    TODO:
    output:
    obj.name => john Doe
*/
 let fullName ={
     firstName: "john",
     lastName: "doe",
 }
console.log(fullName)


// let person ={
//     name: "riwaz",
//     age: 18
// }
// console.log(person);