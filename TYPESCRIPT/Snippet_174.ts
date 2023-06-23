const numbers = [1, 2, 3]; // just like Snippet 173, execpt an inferred to type number[]
numbers.push(4); // no error
numbers.push("5"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.