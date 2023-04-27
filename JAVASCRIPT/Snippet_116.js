// validate an object using
// proxy class
const person = {
    age: 20,
    name: "bob",
};
const p = new Proxy(person, {
    set(target, key, value) {
        if(key === "age" && value < 0) {
            throw new Error (
                'age must be positive'
            );
        }
        target[key] = value;
    }
});
p.age = -5 // returns error 