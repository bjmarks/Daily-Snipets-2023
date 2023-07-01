function createPair<F, S>(v1: F, v2: S): [F, S] {
    return [v1, v2];
  }
  console.log(createPair<string, number>('The meaning of life is ', 42)); // returns ['the meaning of life is ', 42]