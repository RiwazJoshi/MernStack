let students = [
    {
        roll: 1,
        courses: ["Web", "Mobile"]
    },
    {
        roll: 2,
        courses: ["Web", "Graphic"]
    }
]

/* 
    TODO: 
     student with roll 2 have Graphic as one of his course 
    - change it to Mobile 
    - and print it. 
*/

students[1].courses[1]= "Mobile"
console.log(students);


