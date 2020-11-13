function feet(x) {
    return 5 + x;
}
var myLength = 123;
console.log(feet(myLength));
//Tuple example
var currency;
currency = [10, "USD"];
console.log(currency[0] + " " + currency[1]);
//String example
var substr = "dog";
var notaword = "under${substr}";
console.log(notaword);
var word = "under" + substr;
console.log(word);
var html = "<div>" + substr + "</div>";
console.log(html);
