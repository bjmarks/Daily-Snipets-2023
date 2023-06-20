const names = ["bob", "sally"]
var i;
// for(i=0; i < names.length; i++) {
//     setTimeout(() => {
//             console.log(names[i]);
//         }, 100)
// } 
// can be fixed with having let defined in for loop or if wanting to keep var ->
for(i=0; i < names.length; i++) {
    ((name) => {
        setTimeout(() => {
            console.log(name);
        }, 100)
    })(names[i])
}