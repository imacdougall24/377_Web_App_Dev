file = open("day1ex.txt", "r")
lines = file.readlines()


for line in lines:
    line = line.strip()
    kcal = line
    total = 0
    ltotal = 0
    if line == "":
        if total > ltotal:
            ltotal = total
        total = 0

    else:
        total += int(line)
        
print(str(total))
