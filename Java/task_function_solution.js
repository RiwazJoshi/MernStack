

let persons = [
    {
        first_name: "john",
        last_name: "Doe",
        age: 10
    },
    {
        first_name: "Rajesh",
        last_name: "Hamal",
        age: 20,
    },
    {
        first_name: "John",
        last_name: "Wick",
        age: 30,
    },
]
function userDetails(index) {
   console.log("name is" + " " + persons[index].first_name + " " + persons[index].last_name + " " + "and age is" + " " + persons[index].age); 
}
userDetails(0)
userDetails(1)
userDetails(2)


/* 
output should be as follows 
    name is john doe and age is 10.
    name is rajesh hamal and age is 20.
    name is john wick  and age is 30.
*/
