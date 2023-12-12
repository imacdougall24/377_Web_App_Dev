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

                    
def checkValid(input, valid):
    for k in range(len(input)):
        validity = False
        print(input[k], valid[k])
        if input[k] <= valid[k]:
            validity = True
        else:
            return False
    return validity

            
    

        



total = 0
valid = [12, 13, 14]
round = 0
for line in lines:
    round += 1
    ynlist = []
    lined = parLine(line)
    for m in range(len(lined)):
        print(sortColor(lined[m]))
        if checkValid(sortColor(lined[m]), valid) == True:
            ynlist.append('y')
        else:
            ynlist.append('n')
    print(ynlist)
    if 'n' in ynlist:
        total = total
    else:
        total += round
        
    print(total)
