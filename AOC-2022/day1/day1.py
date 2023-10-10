file = open("day1_num.txt", "r")
lines = file.readlines()

max = 0
total = 0
for line in lines:
    line = line.strip()
    
    if line == '':
        if total > max:
            max = total
        total = 0
    else:
        total += int(line)

if total > max:
     max = total

print(str(max))
