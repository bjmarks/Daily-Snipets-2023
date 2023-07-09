type Shape = { kind: "circle"; radius: number } | { kind: "square"; x: number } | { kind: "triangle"; x: number; y: number };
type Test = Exclude<Shape, { kind: "circle" }> // returns square, triangle