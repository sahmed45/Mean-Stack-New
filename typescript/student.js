var Student = /** @class */ (function () {
    function Student(fname, lname, netID) {
        this.fname = fname;
        this.lname = lname;
        this.netID = netID;
        this.studentInfo = fname + " " + lname + " " + netID;
    }
    return Student;
}());
function displayName(personObj) {
    console.log("<h1> " + personObj.fname + " (" + personObj.age + ")</h1>");
}
var ann = new Student("Ann", "Green", 12345);
//Ann as a person
displayName(ann);
//Ann as a student
console.log("Full student information: " + ann.studentInfo);
