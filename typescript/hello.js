function displayName(personObj) {
    console.log("<h1> " + personObj.fname + " (" + personObj.age + ")</h1>");
}
;
var myStudent = { fname: "Jane", lname: "Doe" };
displayName(myStudent);
