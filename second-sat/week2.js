let students = [
    {
        name:'Logan',
        age: 27,
        here: true,
    },
    {
        name:'pam',
        age: 24,
        here: true,
    }
]

function getStudentsNames(studentsArr){
    let studentName = []
    for(let i = 0; i <= studentsArr.length-1; i++){
         studentName.push(studentsArr[i].name) 
    }
    return studentName
}
console.log(getStudentsNames(students))

