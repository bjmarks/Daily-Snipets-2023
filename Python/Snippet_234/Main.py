class Animal:
  def __init__(self, breed, name):
    self.breed = breed
    self.name = name

  def Noise(self):
    print("WOOF")

class Dog(Animal):
  pass

class Cat(Animal):
  def Noise(self):
    print("MEOW")

class Fish(Animal):
  def Noise(self):
    print("BLUB")

oreo = Dog("Shiz tsu", "Oreo")
lady = Cat("Unknown", "Lady")
tanjiro = Fish("Koi", "Tanjiro")

for x in (oreo, lady, tanjiro):
  print(x.breed)
  print(x.name)
  x.Noise()