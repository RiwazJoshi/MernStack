

/* 

    find if a given value is a number if number positive or negative 
     1
     (-10)
     "John"  //should print => the given data is not a number

     
    - make use of if else 
    - typeof
    
    

*/
let findPositive_or_Negative =(num) =>{
    if(typeof num == "number" && num>0){
        console.log("Number Is Positive");
    }
    if(typeof num == "number" && num<0){
        console.log("Numbet Is Negative");
    }
    else if(typeof num == "string"){
        console.log("The Given Data Is Not A Number");
    }
}
findPositive_or_Negative("riwaz")