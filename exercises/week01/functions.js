function square(x) {
    let result= x * x;
    return result;
}

let a = 10;
let b = square(a);
console.log("The square of " + a + "is " + b);

const square = function (maths) {
    const result = x * y;
    return maths * result;
};

let y = 1000; 

console.log(square);

let isGreaterThan = (num1, num2) => {
    if(num1 > num2) {
        return true;
    }
    else {
        return false;
    }
};

console.log(isGreaterThan(10, 5));

setTimeout(() => {
    console.log("3 seconds have elapsed!")
}, 3000);

//combined length//
let combinedLength = (str1, str2) => {
    return str1.length + str2.length;
};

console.log(combinedLength("hi", "you") + 10);