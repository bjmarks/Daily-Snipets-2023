interface Serializer {
    set value(v: string | number | boolean);
    get value(): string;
}
declare let box: Serializer;
box.value = true; // uses set 
console.log(box.value.toUpperCase()); // uses get