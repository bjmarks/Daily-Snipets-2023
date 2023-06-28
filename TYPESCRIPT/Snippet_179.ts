const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jack = 25; // Returns no error
nameAgeMap.Mark = "Fifty"; // Returns Error: Type 'string' is not assignable to type 'number'.
console.log(nameAgeMap);