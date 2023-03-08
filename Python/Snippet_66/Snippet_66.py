import math
def get_even():
    question = input("Enter a number: ")
    for que in range(int(question) + 1):
        if que % 2 == 0:
            print(que)
    print(get_square(int(question)))
def get_square(n):
    return math.sqrt(n)
get_even()