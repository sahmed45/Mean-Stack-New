"use strict";
exports.__esModule = true;
function displayMemberInformation(memberObj) {
    console.log("<h1> " + memberObj.name + " (" + memberObj.contact + ")</h1>");
}
var member1 = { name: "Syed", contact: "sahmed45@students.kennesaw.edu" };
displayMemberInformation(member1);
