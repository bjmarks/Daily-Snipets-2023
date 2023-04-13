(async () => {
    let url = `https://pokeapi.co/api/v2/pokemon/ditto`;
    const thenFetch = fetch(url).then(res => res.json()).then(data => {
        console.log("thenFetch Data : ")
        console.log(data);
        return data;
    });
        console.log(thenFetch);
    const res = await fetch(url);
        console.log(res);
})();
