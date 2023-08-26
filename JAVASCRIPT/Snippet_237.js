const input = document.getElementById("searchInput");
let file = {
    anime: [
        {
            name: "Attack On Titan",
            seasons: 4,
            subbed: true,
            dubbed: true,
            avgDuration: 24,
            episodes: 88,
            siteToWatch: [
                "9anime.se",
                "crunchyroll.com"
            ]
        },
        {
            name: "The Great Cleric",
            seasons: 1,
            subbed: true,
            dubbed: true,
            avgDuration: 24,
            episodes: 8,
            siteToWatch: [
                "9anime.se",
                "crunchyroll.com"
            ]
        }
    ],
    manga: ["nothing at the moment"]
}
input.addEventListener("keyup", () => {
    let results = [];
    let inputValue = input.value;
    if(inputValue.length) {
        console.log(inputValue);
        results = file.anime.filter((item) => {
            return item.name.toLowerCase().includes(inputValue.toLowerCase());
        })
        console.log(results);
    }
})