import urllib3
def revBook():
    send = open("AliceInWonderLandREV.txt","a")
    with open("AliceInWonderLand.txt","r") as file:
        data = file.read()
    reversed = data[::-1]
    send.write(reversed)
    send.close()
def revLine():
    send = open("AliceInWonderLandREV.txt","a")
    data = ""
    with open("AliceInWonderLand.txt","r") as file:
        for line in file.read().splitlines():
            data += line[::-1] + "\n"
    send.write(data)
    send.close()
def pullFromWeb():
    send = open("Alice.txt","a")
    http = urllib3.PoolManager()
    r = http.request('GET', "https://learn-us-east-1-prod-fleet02-xythos.content.blackboardcdn.com/5ddee2fc8b3b3/39573200?X-Blackboard-S3-Bucket=learn-us-east-1-prod-fleet01-xythos&X-Blackboard-Expiration=1680760800000&X-Blackboard-Signature=1CQNjXKtbcZ8YEVSr%2FiEtbyT%2B7%2BKDWIzn0KUVGG7bFM%3D&X-Blackboard-Client-Id=301587&X-Blackboard-S3-Region=us-east-1&response-cache-control=private%2C%20max-age%3D21600&response-content-disposition=inline%3B%20filename%2A%3DUTF-8%27%27AliceInWonderLand.txt&response-content-type=text%2Fplain&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLWVhc3QtMSJHMEUCIAviTNVjwE4EJJooH1k3pqPaO%2FpJKhs%2BiEQ%2FKFawdIeLAiEAujVts3Q%2Bt%2FGe162UFXT8Q6c2RgE7QCDsU1YtcEwjRXcqtQUIIhADGgw2MzU1Njc5MjQxODMiDG3JlNtRrS9BJ%2BAqJyqSBUIHuVQHtaaX32h1kPTXdFEPXwoaDp%2BjfuHman3Yi1h5x%2FjmnHcH%2BW6gOAe9dIFEGHqDcT1GLI%2F5fsomwV4tWV8QNYi%2BhwMgXSdCmaGm1iCU%2B5cQ4ySQo9srmIi4qGwULNe2yL%2F8lqWKcFYKRyDnVP46wgjmvYN4LFa%2BrSM5%2FZE6UWq166%2FamsKmns%2BOht8v6n2UcTQW69bsw8TEOdaMWH2uhVro4cW7J%2FU%2Fc433fzg5Nu%2B7V2RWkuN5pnpjkK%2FiGSHSHdd4wYoHyMs8fWOdVlENPyB8wmHQunsarZO0M2L6JQVk5MTVUCRHCpbSzpvFMBHljWcoaW6geXPysAJQ3VKj53r%2BrY%2B4oVfrTYoj4IOg31gL8GJZqAIREiRhuI1BWT1E%2Bkmz8L53srRacC1R6d6JvxPdEAW5%2FxS4ocarKshFFegE2r7Hh1QWbR20GaISlRcjhWDF4UjqIhH2Sxmkhc7GflIHrSGJIRES5KFXHVKQn2ERHdBS5HrfBUWYqFZmVhBlMqoy7qRQYnUOHTYJQViEhIWDmCV0fUBo0S8jHUHdvUPEeybJXiZMW3R7LdS%2FSvIU7y5eA5gE0Bfgc1uKQBDaa%2BkQO27uPmp8EbPA980nwZPtxZWZfLX7mXGGZWPjc%2FrvRYJOkcvFWKPiTcyCkkcjudUbxMKmfD2gWiQ7wqBrvrRPexHDQSiDl0twQOM2z15Holw9r017lrWHHCyE998IATMluGke5jBrwX%2BQvAqCNfbKkE3ZbZfji8HWckENQMF2Ln6BceokuZCWvZIP4jn9XhFOoe%2Bd54fxtc0HXJl4XL8yAwXfZuJCHZhJaP1ne0y0V9HuVEEixkIAB9XK2%2FiGnQBr6JAMWHf28jDl2ngskgsw4KS4oQY6sQFEuKN6McSJguOCX0ZTbNsz6DhSaRVo%2FnWyheaiJZa8CX%2FGlzJXzkLMjcQGjUZpuHFlzocd2AjFUPeRhshvpECiHu8yHb%2FYa3zSN1wZEJjyhxro9RIvUObknWRODjvilcb8T%2FtfT92Y6sxVK9EDTp6dUomN0H%2F1irrNlwV4ep8R21c%2BBz2ULS8LRGM5y6k6N5yyQ8QTDcWltT1%2BQAJS28kI40Rg3ril0XMTbPicDTSOKsI%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230406T000000Z&X-Amz-SignedHeaders=host&X-Amz-Expires=21600&X-Amz-Credential=ASIAZH6WM4PLUBBVGAG2%2F20230406%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ba27eabd4ba5303b5ebe133317be638d59df8c90bb5cee61934727d3913cc4c5")
    send.write(str(r.data))
def Book():
    pullFromWeb()
    send = open("AliceInWonderLandREV.txt","a")
    with open("Alice.txt","r") as file:
        data = file.read()
    reversed = data[::-1]
    send.write(reversed)
    send.close()
Book()
