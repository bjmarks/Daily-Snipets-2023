// higher order functions
function timer(cb) {
    return function (...args) {
        const then = Date.now();
        const results = cb.apply(null, args);
        const now = Date.now();
        console.log(`${now - then}ms`);
        return results;
    }
}
function fib(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fib(n - 1) + fib(n - 2);
}
const wrapped = timer(fib)
console.log(wrapped(20));