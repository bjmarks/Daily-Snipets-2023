type Test0 = Exclude<"a" | "b" | "c", "a">; // returns b, c
type Test1 = Exclude<"a" | "b" | "c", "a" | "b">; // returns c
type Test2 = Exclude<string | number | (() => void), Function>; // void function excluded