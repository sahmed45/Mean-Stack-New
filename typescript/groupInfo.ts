export interface MemberObject {
  name: string;
  contact: string;
}
function displayMemberInformation(memberObj: MemberObject) {
  console.log(`<h1> ${memberObj.name} (${memberObj.contact})</h1>`);
}
let member1 : MemberObject = { name: "Syed", contact: "sahmed45@students.kennesaw.edu"};
displayMemberInformation(member1)