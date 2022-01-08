module.exports = function reverse(n) {
    const a = Number(Math.abs(n).toString().split('').reverse().join(''))
    return ((n>=0) ? a : a)
}
