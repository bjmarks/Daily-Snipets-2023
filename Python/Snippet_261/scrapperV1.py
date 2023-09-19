import requests
from bs4 import BeautifulSoup
baseurl = 'https://www.thewhiskyexchange.com/'
headers = {
    'Accept': 'text/html, */*;q=0.8',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Safari/605.1.15'
}
print(requests.get(baseurl, headers=headers))
for x in range(1,6):
    r = requests.get(f'https://www.thewhiskyexchange.com/c/35/japanese-whisky?pg={x}#productlist-filter')
    soup = BeautifulSoup(r.content, "lxml")
    productlist = soup.find_all("li", class_="product-grid__item")
    productlinks = []
    for item in productlist:
        for link in item.find_all('a', href=True):
            productlinks.append(baseurl + link['href'])
print(len(productlinks))