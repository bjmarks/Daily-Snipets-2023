const sing = function() { //typescript infers this as never 
    while(true) {
        console.log('Never gonna give up');
        console.log('Never gonna let you down');
        console.log('Never gonna run around and desert you');
        console.log('Never gonna make you cry');
        console.log('Never gonna say goodbye');
        console.log('Never gonna tell a lie and hurt you');
    }
};