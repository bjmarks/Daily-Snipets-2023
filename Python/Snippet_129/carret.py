x = '20105'
y = [x.find('0')] # [1]
z = len(y)^2
print(z)

# A: 4
# B: 0
# C: ERROR
# D: 1
# E: 3

# ^ = xor
# z = len(y)^2 =~= 1^2
# 1 = 01 
# 2 = 10
# if columns are the same the outcome os 0, but if differnt the result is 1
# so 11 in binary is 3  