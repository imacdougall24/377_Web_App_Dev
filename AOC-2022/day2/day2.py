file = open("day2sg.txt", "r")
lines = file.readlines()

total = 0
for line in lines:
    throw = line.strip().split()
# My Values
    if throw[0] == "A":
        total += 1
        myVal = "r"
    elif throw[0] == "B":
        total += 2
        myVal = "p"
    elif throw[0] == "C":
        total += 2
        myVal = "s"
# Enemy Values
    if throw[1] == "A":
        enVal = "r"
    elif throw[1] == "A":
        enVal = "p"
    elif throw[1] == "A":
        enVal = "s"

# Who wins
    if myVal == "r":
        if enVal == "r":
            total += 3
        if enVal == "s":
            total += 6
    
    if myVal == "p":
        if enVal == "p":
            total += 3
        if enVal == "r":
            total += 6

    if myVal == "s":
        if enVal == "s":
            total += 3
        if enVal == "p":
            total += 6
    print(total)