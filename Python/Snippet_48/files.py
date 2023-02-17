import os
shows_path = r"D:\TV Shows"
movies_path = r"D:\Movies"
shows = os.listdir(shows_path)
movies = os.listdir(movies_path)
for show in shows:
    print(show)
print(str(len(shows)) + " SHOWS in TV Shows")
for movie in movies:
    print(movie)
print(str(len(movies)) + " MOVIES in Movies")