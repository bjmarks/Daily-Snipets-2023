import requests
from bs4 import BeautifulSoup
url = 'https://www.imdb.com/chart/top/'
try:
    source = requests.get(url)
    source.raise_for_status()
    soup = BeautifulSoup(source.text, 'lxml')
    movies = soup.find('tbody', class_='lister-list').find_all('tr')
    for movie in movies:
        name = movie.find('td', class_='titleColumn').a.text
        print(name)
        break
except Exception as e:
     print(e)