file = open('AOC_2023\AOC-4\AOC-4-ref.txt', 'r')
lines = file.readlines()
file.close()


def parLine(line):
    line = line.split(' ')
    line = [i.strip() for i in line]
    while ('' in line):
        line.remove('')
    return line

def luck(line):
    count = 0
    winNum = line[0:line.index('|')]
    gotNum = line[line.index('|') +1:]
    print(gotNum)
    print(winNum)
    
    for sNum in gotNum:
        if sNum in winNum:
            if count == 0:
                count += 1
            else:
                count *= 2
            

            print(sNum)
            
    return count
            


total = 0
for line in lines:
    total += luck(parLine(line))
print(total)
