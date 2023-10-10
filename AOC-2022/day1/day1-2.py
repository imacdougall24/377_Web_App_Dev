file = open("day1_num.txt", "r")
lines = file.readlines()

first = 0
second = 0
third = 0
total = 0
for line in lines:
    line = line.strip()
    
    if line == '':
        
        if total > first:
            third = second
            second = first
            first = total
        
        elif total > second:
            third = second
            second = total
        
        elif total > third:
            third = total
        total = 0

    else:
        total += int(line)


if total > first:
        third = second
        second = first
        first = total
        
elif total > second:
    third = second
    second = total
        
elif total > third:
    third = total
    total = 0

top = first + second + third

print(str(top))

