import re
file = open('AOC_2023\AOC-1\AOC-1-ref.txt', 'r')
lines = file.readlines()
total = 0

one_digit = { 'zero':0, 'one':1, 'two':2, 'three':3,
            'four':4, 'five':5, 'six':6, 'seven':7,
            'eight':8, 'nine':9 }


def findSpelled(line):
    for key, value in one_digit.items():
        temp_str = str(key)
        if temp_str in line:
            indx = int(line.index(temp_str))
            line = line[0:indx] + str(value) + line[indx - 1 + len(temp_str)]
        

    
            
        







for line in lines:
    line = line.strip()
    findSpelled(line)
    print(line)
#     numA = ''.join(x for x in line if x.isdigit())
#     numB = int( numA[0] + numA[-1] )
#     total += numB

    

# print(total)
