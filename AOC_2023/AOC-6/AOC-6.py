file = open('AOC_2023\AOC-6\AOC-6-ref.txt', 'r')
lines = file.readlines()

t = [58996469]
d = [478223210191071]

a = []

tally = 0

for i in range(1):
    for v in range(t[i]):
        time = t[i]-v
        total = time*v

        if total > d[i]:
            tally += 1
    
    a.append(tally)
    tally = 0

sum = 1
for j in range(1):
    sum *= a[j]

print(sum)



