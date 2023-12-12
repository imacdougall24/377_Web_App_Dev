file = open('AOC_2023\AOC-2\AOC-2-ref.txt', 'r')
lines = file.readlines()

for line in lines:
    for round in line.split(':')[1].split(';'):
        for color_count in [ x.strip() for x in round.split(',') ]:
            count, color = [ entry.strip() for entry in color_count.split(' ')]
    print(line)