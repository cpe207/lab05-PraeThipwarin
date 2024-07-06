// assign interface/type to the function definition properly
class Student {
    name;
    score;
}

function findTopNames(students){
    let TopStudent = students.filter((x) => x.score > 8 );
    return TopStudent;
  }
  
// assign interface/type to the student1 object properly
const students1 = [
    { name: "john", score: 10 },
    { name: "jane", score: 9 },
    { name: "jim", score: 8 },
  ];
  
console.log(findTopNames(students1));
module.exports = findTopNames;
