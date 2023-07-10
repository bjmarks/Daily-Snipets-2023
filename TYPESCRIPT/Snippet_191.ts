type A = Awaited<Promise<string>>;  // return type A = string
type B = Awaited<Promise<Promise<number>>>; // return type B = number
type C = Awaited<boolean | Promise<number>>; // ruturn type C = number | boolean
// Awaited Types