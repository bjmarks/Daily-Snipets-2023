x = "awesome"

def myfunc():
  x = "fantastic"
  print("Python is " + x)

myfunc()

print("Python is " + x)

def myfunc2():
  global xy
  xy = "fantastic"

myfunc()

#print("Python is " + xy)// returrns an error
