const solution = require('./sumUpNumbers.js');

test('test 1', () => {
    expect(solution("2 apples, 12 oranges")).toBe(14);
});

test('test 2', () => {
    expect(solution("123450")).toBe(123450);
});

test('test 3', () => {
    expect(solution("Your payment method is invalid")).toBe(0);
});

test('test 4', () => {
    expect(solution("no digits at all")).toBe(0);
});

test('test 5', () => {
    expect(solution("there are some (12) digits 5566 in this 770 string 239")).toBe(6587);
});

test('test 6', () => {
    expect(solution("42+781")).toBe(823);
});

test('test 7', () => {
    expect(solution("abc abc 4 abc 0 abc")).toBe(4);
});

test('test 8', () => {
    expect(solution("abcdefghijklmnopqrstuvwxyz1AbCdEfGhIjKlMnOpqrstuvwxyz23,74 -")).toBe(98);
});
