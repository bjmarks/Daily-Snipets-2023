names = [
    'Daniel','Mike','William'
]
# List comprehnsion
lenth = [len(name) for name in names]
# Dictionary comprehention
nlenth = {name:len(name) for name in names}

print(nlenth)