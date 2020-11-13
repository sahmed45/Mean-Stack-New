class Student {
  studentInfo: string;
  constructor(
    public fname: string,
    public lname: string,
    public netID: number
  ) {
    this.studentInfo = fname + " " + lname + " " + netID;
  }
}
interface Person {
  fname: string;
  lname: string;
  age?: number;
}
function displayName(personObj: Person) {
  console.log(`<h1> ${personObj.fname} (${personObj.age})</h1>`);
}
let ann = new Student("Ann", "Green", 12345);
//Ann as a person
displayName(ann);
//Ann as a student
console.log("Full student information: " + ann.studentInfo);

export interface StudentObject {
    firstName: string;
    lastName: string;
    }