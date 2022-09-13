function solution(inputString) {
    let sum = 0;
    let num = '';
    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i].match(/[0-9]/)) {
            num += inputString[i];
        } else {
            sum += Number(num);
            num = '';
        }
    }
    sum += Number(num);
    return sum;
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test sumUpNumbers

// alternative solution
