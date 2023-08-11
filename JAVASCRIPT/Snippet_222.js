let request = {
    test: {
        hyundai: "elantra",
        canvas: window.innerWidth,
        testFunction: () => {
            console.log("test sucsesful");
        },
        testFunction2: () => {
            request.test.testFunction()
        },
        testFunction3: () => {
            console.log(request.test.hyundai);
            console.log(request.test.canvas); // can use to get values
        }
    }
};