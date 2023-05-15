import requests
header = {'Content-Type': 'application/json'}
response = requests.get('https://pokeapi.co/api/v2/pokemon/ditto', headers=header)
data = response.json()
print(data)