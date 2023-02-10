function count(x) {
    if(x == 11) {
      return
    }
    console.log("recursion " + x);
    return count(x + 1);
}
   count(1);