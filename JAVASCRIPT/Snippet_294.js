const url = 'https://icanhazdadjoke.com/';
const fetchDadJoke = async () => {
    try {
        const response = await fetch(url, {
            headers: {
                Accept: 'application/json',
                'User-Agent': 'user 13',
            },
        });
        if (!response.ok) {
            throw new Error(' error');
        }
        const data = await response.json();
        console.log(data.joke);
    }
    catch (error) { console.log(error.message); }
};
fetchDadJoke();