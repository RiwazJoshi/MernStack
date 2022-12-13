console.log("Start");
console.log(3);
console.log(2);
function printNumber() {
    
    console.log(1);
}
printNumber()
// Asynchoronous : task thart happens in future
function Asynchoronous() {
    
    console.log("Happy Birthday");
}
// callBack  cb
// - Function that gets passed to another function as an argument
setTimeout(Asynchoronous,2500)
console.log(0);

//AnonymousFunction
/* 
settimeout(()=>{
    console.log("doSomething");},3000)
*/