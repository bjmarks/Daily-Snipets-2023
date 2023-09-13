from urllib.parse import urlparse
url = 'https://mangakakalot.com/read-nl9dk158524506006'
obj = urlparse(url)
print(obj.scheme)
print(obj.netloc)
print(obj.hostname)
print(obj.geturl())
print(obj.path)