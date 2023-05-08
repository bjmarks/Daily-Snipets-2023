function getMessage() {
    return new Promise(resolve =>
        resolve("hello world")
    )
}
function main1() {
    console.log(getMessage())   // returns promise
}
main1()
function main2() {
    getMessage().then((message) => console.log(message)) // returns hello world text
}
main2()
async function nmain3() {
    const message = await getMessage()
    console.log(message) // asynchronously returns hello world text
}
nmain3()