lines = [line.strip() for line in open('AOC_2023\AOC-9\AOC-9-ref.txt', 'r')]




def all_same(items):
    return all(x == items[0] for x in items)

def findChart(line):
    newLine = []
    indx = 0
    newLine.append(line)
    while(all_same(newLine[indx]) != True):
        newLine.append(findDif(newLine[indx]))
        indx += 1
    return newLine

def findDif(line):
    newLine = []
    for i in range(len(line)-1):
        newLine.append(int(line[i+1]) - int(line[i]))
    return newLine


def sumItUp(line):
    myLine = []
    for a in range(len(line)-2):
        line[len(line)-2-a].append(line[len(line)-1-a][-1] + line[len(line)-a-2][-1])
    for b in range(len(line)):
        myLine.append(line[b][-1])
    return myLine



# EXEC LINES ------------------------------------------------------------------------------
for line in lines:
    line = line.split(" ")
    chartTot = findChart(line)
    print(sumItUp(chartTot))
