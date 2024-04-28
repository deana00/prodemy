// 1. sum two numbers
function myFunction(a, b){
    return a+b; 
}

// 2. Comparison operators, strict equality
function myFunction(a,b) {
    return a === b;
}

// 3. Get type of value
function myFunction(a) {
    return typeof a;
}

// 4. get nth character of string
function myFunction(a, n) {
    return a[n - 1];
}

// 5. remove first n characters of string
function myFunction(a) {
    return a.slice(3);
}

// 6. get last n characters of string
function myFunction(str) {
    return str.slice(-3);
}

// 7. get first n characters of string
function myFunction(a) {
    return a.slice(0, 3);
}

// 8. find the position of one string in another
function myFunction(a) {
    return a.indexOf('is');
}

// 9. extract first half of string
function myFunction(a) {
    return a.slice(0, a.length / 2);
}

// 10. remove last n characters of string 
function myFunction(a) {
    return a.slice(0, -3);
}

// 11. return the percentage of a number
function myFunction(a, b) {
    return b / 100 * a
}

// 12. basic javascript math operators
function myFunction(a, b, c, d, e, f) {
    return (((a + b - c) * d) / e) ** f;
}

// 13. check whether a string contains another string and concantenate
// my answer
function myFunction(a, b) {
    return a.includes(b) ? b+a : a+b;
}
// author's solution
function myFunction(a, b) {
    return a.indexOf(b) === -1 ? a + b : b + a
}

// 14. check if a number is even
// my answer
function myFunction(a) {
    return a % 2 == 0
}
// author's solution
function myFunction(a) {
    return a % 2 === 0
}

// 15. how many times does a character occur?
function myFunction(a, b) {
    return b.split(a).length - 1
}

//  16. Check if a number is a whole number
// my answer
function myFunction(a) {
    return Number.isInteger(a);
}
// author's solution
function myFunction(a) {
    return a - Math.floor(a) === 0
}

// 17. Multiplication, division, and comparison operators
function myFunction(a, b) {
    return a<b ? a/b : a*b
}

// 18. round a number to 2 decimal points
// my answer (try again)
function myFunction(a){
    return a.toFixed(2);
}
// my answer (pass)
function myFunction(a) {
    return Math.round(a*100)/100;
}
// author's solution
function myFunction(a) {
    return Number(a.toFixed(2));
}

// 19. Split a number into its digits
// my answer
function myFunction(a) {
    return a.toString().split('').map(Number);
}
// author's solution
function myFunction( a ) {
    const string = a + '';
    const strings = string.split('');
    return strings.map(digit => Number(digit))
}