let request = {
    method: "POST",
    headers: {
        "Content-Type": "Application/json"
    },
    body: JSON.stringify({
        name: "ditto"
    })
}
fetch("https://reqres.in/api/users", request).then(res => res.json()).then(data => console.log(data))