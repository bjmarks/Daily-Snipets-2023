// union types are used when a value can be more than a single type
function statusCode(code: string | number) {
    console.log(`status code: ${code}.`)
}
statusCode(404);
statusCode('404');
statusCode(200);