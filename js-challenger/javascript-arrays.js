// 1. get nth element of an array
function myFunction(a, n) {
    return a[n - 1];
}

// 2. remove first n elements of an array
// my answer (splice will mutating the array)
function myFunction(a) {
    a.splice(0,3)
    return a;
}
// author's solution 
// slice avoid mutating the array (new array will be created without the removed element)
function myFunction(a) {
    return a.slice(3);
}

// 3. get last n elements of an array
function myFunction(a) {
   return a.slice(-3);
}

// 4. get first n elements of an array
function myFunction(a) {
    return a.slice(0, 3);
}

// 5. return last n array elements
// my answer
function myFunction(a, n) {
    return a.slice(arr.length-n);
}
// author's solution
function myFunction(a, n) {
    return a.slice(-n);
}

// 6. remove a specific array element
// my answer
function myFunction(a, b) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] === b) {
            a.splice(i,1)
        }
    }
    return a;
}
// author's solution
function myFunction( a, b ) {
    return a.filter(cur => cur !== b)
}

// 7. count number of elements in JavaScript array
function myFunction(a) {
    return a.length;
}

// 8. count number of negative values in array
// my answer
function myFunction(a) {
    negativeValues = a.filter((el) => el < 0);
    return negativeValues.length;
}
// author's solution
function myFunction(a) {
    return a.filter((el) => el < 0).length;
}

// 9. sort an array of strings alphabetically
function myFunction( arr ) {
    return arr.sort()
}

// 10. sort an array of numbers in descending order
// my answer
function myFunction( arr ) {
    return arr.sort().reverse();
}
// author's solution
function myFunction( arr ) {
    return arr.sort((a, b) => b - a)
}

// 11. calculate the sum of array of numbers
// my answer
function myFunction(a) {
    sum = 0;
    for (let i=0; i<a.length; i++){
        sum = sum + a[i];
    }
    return sum;
}
// author's solution
function myFunction(a) {
    return a.reduce((acc, cur) => acc + cur, 0);
}

// 12. return the average of an array of numbers
function myFunction( arr ) {
    return arr.reduce((acc, cur) => acc + cur, 0) / arr.length
}

// 13. return the longest string from an array of strings
// my answer
function myFunction(arr) {
    longest = arr[0];
    for (let i=1; i<arr.length; i++){
        if (arr[i].length > longest.length){
            longest = arr[i];
        }
        return longest;
    }
}
// author's solution
function myFunction( arr ) {
    return arr.reduce((a, b) => a.length <= b.length ? b : a)
}

// 14. check if all array elements are equal
// my answer
function myFunction(arr) {
    return arr.every(val => val === arr[0]);
}
// author's solution
function myFunction( arr ) {
    return new Set(arr).size === 1
}

// 15. merge an arbitrary number of arrays
// my answer
function myFunction( ...arrays ) {
    return [].concat(...arrays)
}
// author's solution
function myFunction( ...arrays ) {
    return arrays.flat()
}

// 16. sort array by object property


// 17. merge two arrays with duplicate values