function makeNegative(num) {
        return num <= 0 ? num : -num;
}


console.log(makeNegative(42), '->', -42);
console.log(makeNegative(9), '->', -9);
console.log(makeNegative(5), '->', -5);
console.log(makeNegative(3.14), '->', -3.14);
console.log(makeNegative(0), '->', 0);