values = [1,2,3,4,5]
def x_ify(n: int) -> str:
    return n * 'x'
mapped = map(x_ify, values)
print(list(mapped))
maped = map(str, values)
print(list(maped))
