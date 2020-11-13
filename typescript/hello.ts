function displayName(personObj: Person) {
    console.log(`<h1> ${ personObj.fname} (${personObj.age})</h1>`);
   }
   interface Person {
    fname: string,
    lname: string,
    age?: number
   };
   let myStudent : Person = { fname: "Jane", lname: "Doe"};
   displayName(myStudent);