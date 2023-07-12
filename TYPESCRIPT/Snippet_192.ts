function toArray<X>(i: Iterable<X>): X[] {
    return [...i]
}
console.log(toArray([0,5]));