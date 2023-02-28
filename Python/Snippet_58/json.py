import json

a = '{ "name":"John", "age":30, "city":"New York"}'
b = json.loads(a)
print(b["age"])
x = '{ "name":"John", "age":30, "city":"New York"}'
y = json.dumps(x)
print(y)
