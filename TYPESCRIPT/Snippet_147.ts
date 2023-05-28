let anyValue: any;
let unknownValue: unknown;
anyValue(); // alright with that
// unknownValue(); // not alright with it
// have to check before using unknown
if(typeof unknownValue === 'function') {
    unknownValue();
}
// TypeGaurd || typeNarrowing