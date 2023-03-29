import datetime
import sys
now = datetime.datetime.now()
# def name():
#     print("First Name: f / F")
#     print("Last Name: l / L")
#     print("Whole Name: w / W")
#     choice = input("What type of name is requested? \n")
#     match(choice.upper()):
#         case "F":
#             print("Lucas")
#         case "L":
#             print("Hall")
#         case "W":
#             print("Lucas Hall")
#         case default:
#             print("Not a Valid response...")
#             name()
def get_name(firstName ,lastName):
    print("First Name: f / F")
    print("Last Name: l / L")
    print("Whole Name: w / W")
    choice = input("What type of name is requested? \n")
    match(choice.upper()):
        case "F":
            print(firstName)
        case "L":
            print(lastName)
        case "W":
            print(firstName + " " + lastName)
        case default:
            print("Not a Valid response...")
            get_name(firstName, lastName)
def get_date():
    print("Get day: d / D")
    print("Get month: m / M")
    print("Get time: t / T")
    choice = input("What unit of day(s) is requested? \n")
    match(choice.upper()):
        case "D":
            print(now.strftime('%A'))
        case "M":
            print(now.strftime('%B'))
        case "T":
            print(now.strftime('%X %p'))
        case default:
            print("Not a Valid response...")
            get_date()
def get_favorites(movie, game, sport):
    print("Get favorite movie: m / M")
    print("Get favorite game: g / G")
    print("Get favorite sport: s / S")
    choice = input("What favorite activity is requested? \n")
    match(choice.upper()):
        case "M":
            print(movie)
        case "G":
            print(game)
        case "S":
            print(sport)
        case default:
            print("Not a Valid response...")
            get_favorites(movie, game, sport)
while(True):
    print('\033[1;32m '+ "")
    print("get Name: choose a")
    print("get Date: choose b")
    print("get Favorites: choose c")
    print("Quit: choose q")
    choice = input("Choose an option: ")
    match(choice.upper()):
        case "A":
            get_name("Benjamin","Marks")
        case "B":
            get_date()
        case "C":
            get_favorites("avengers","Halo 5","quidich")
        case "Q":
            print("Exiting...")
            sys.exit()
        case default:
            print("Not a Valid response...")