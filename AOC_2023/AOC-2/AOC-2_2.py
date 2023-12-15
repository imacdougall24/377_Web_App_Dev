file = open('AOC_2023\AOC-2\AOC-2-ref.txt', 'r')
lines = file.readlines()

def parLine(line):
    line = line.replace(':', ',').split(';')
    line = [i.strip() for i in line]
    while ('' in line):
        line.remove('')
    for x in range(len(line)):
        line[x] = line[x].replace(':', ',').split(',')
        line[x] = [i.strip() for i in line[x]]

    return line

def sortColor(line):
        r = 0
        g = 0
        b = 0
        for i in line:
            digit = ''
            for j in range(len(i)):
                if i[j].isdigit():
                    digit += str(i[j])
            if 'green' in i:
                g += int(digit)
            if 'blue' in i:
                b += int(digit)
            if 'red' in i:
                r += int(digit)
        return [r, g, b]
    

def sortRound(line):
    newLine = []
    for a in range(len(line)):
        newLine.append(sortColor(line[a]))
    return newLine



def findValMax(line):
    newLine = [0, 0, 0]
    for g in range(3):
        for h in range(len(line)):
            if line[h][g] > newLine[g]:
                newLine[g] = line[h][g]
    return newLine


def powerToTotal(line):
    locTotal = 1
    for c in line:
        locTotal *= c
    return locTotal


    

    



total = 0
for line in lines:
    line = parLine(line)
    line = sortRound(line)
    line = findValMax(line)
    print(line)
    total += powerToTotal(line)
    print(total, "\n----")