

let person1 =
{
    age: 19,
    consent: true
}


let person2 =
{
    age: 19,
    consent: true
}

/* 
    TODO: find if they are able to marry with each other. person1&2 , 3&4
    - criteras
        - both shuld be greater than 18
        - both shoulb have consent
*/


let person3 =
{
    age: 20,
    consent: true
}


let person4 =
{
    age: 120,
    consent: false
}

let marriage_1_2 = () => {

    // console.log(person1.age > 18 && person2.age > 18)
    // console.log(person1.consent == true && person2.consent == true)
    if ((person1.age > 18 && person2.age > 18) && (person1.consent == true && person2.consent == true)) {
        console.log(" Person 1 and 2 Can get married");
    }
    else {
        console.log("Person 1 and 2 Can't Get married");

    }
}
marriage_1_2()

let marriage_3_4 = () => {
    if (person3.age > 18 && person4.age > 18 && person3.consent == true && person4.consent == true) {

        console.log("Person 3 and 4 Can Get Married");
    }

   else {


        console.log("Person 3 and 4 Can't Get married");

    }
}
marriage_3_4()