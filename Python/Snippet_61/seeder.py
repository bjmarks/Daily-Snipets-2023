import json
import os

shows_path = r"D:\TV Shows"
movies_path = r"D:\Movies"
shows = os.listdir(shows_path)
movies = os.listdir(movies_path)
show_list = []
for series in shows:
    seasons = os.listdir(shows_path + "\\" + series)
    s = {
        "title" : series
    }
    for season in seasons:
        s["season"] = season
        show_list.append(s)
with open("list.json", "w") as file:
    json.dump(show_list, file, indent=4)
print("done")