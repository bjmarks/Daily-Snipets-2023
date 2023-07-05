function f1() { // inferred that 'f1' returns 'void'
    // no returns
}
function f2(): void {// 'void' doesn't need a return statement
    // no returns
}
function f3(): any { // 'any' doesn't need a return statement
    // no returns
}
function f4(): undefined { // A function whose declared type is neither 'void' nor 'any' must return a value.
    // no returns
}