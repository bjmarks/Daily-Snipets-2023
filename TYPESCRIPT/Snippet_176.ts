// A tuple is a typed array with a pre-defined length and types for each index.
// Tuples are great because they allow each element in the array to be a known type of value.
// To define a tuple, specify the type of each element in the array:
let teenageMutantNinjaTuple: [number, string, string, string, string];
teenageMutantNinjaTuple = [4, "Leonardo", "Donatello", "Michelangelo", "Raphael"]; // initialize correctly
teenageMutantNinjaTuple = ["Leonardo", "Donatello", "Michelangelo", "Raphael", 4]; // initialize incorrectly