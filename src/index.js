module.exports = function reverse (n) {
    n = n + '';
    let numberArray = n.split('');
    return parseInt(numberArray.reverse().join(''));
}
