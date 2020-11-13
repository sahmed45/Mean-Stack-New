function feet(x) {
  return 5 + x;
}
let myLength: number = 123;
console.log(feet(myLength));

//Tuple example
let currency: [number, string];
currency = [10, "USD"];
console.log(currency[0] + " " + currency[1]);
//String example
let substr: string = "dog";
let notaword: string = "under${substr}";
console.log(notaword);
let word: string = `under${substr}`;
console.log(word);
let html: string = `<div>${substr}</div>`;
console.log(html);