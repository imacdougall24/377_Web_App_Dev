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

# -------------------------------------------------------------------------



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
round = 0
for line in lines:
    round += 1
    myList = []
    # Split lines intp color
    lined = parLine(line)
    # Sorts into the color
    for m in range(len(lined)):
        myList.append(sortColor(lined[m]))
    print(myList)
    
    rgbPre = [0, 0, 0]
    for aa in range(len(myList)):
        for ab in range(len(myList[aa])):
            if (myList[ab][aa] > rgbPre[aa]):
                rgbPre[aa] = myList[ab][aa]
    print(rgbPre)



    print("---")

    
        
