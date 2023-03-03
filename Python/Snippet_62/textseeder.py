import os
shows_path = r"D:\TV Shows"
shows = os.listdir(shows_path)
file1 = open("seeder.txt", "a")
for show in shows:
    seasons = os.listdir(shows_path + "\\" + show)
    print(show)
    file1.writelines(show + "\n")
    for season in seasons:
        episodes = os.listdir(shows_path + "\\" + show + "\\" + season)
        print("\t" + season)
        file1.writelines("\t" + season + "\n")
        for episode in episodes:
            print("\t\t" + episode)
            file1.writelines("\t\t" + episode + "\n")