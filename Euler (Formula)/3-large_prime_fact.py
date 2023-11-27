prime = False
primeNum = 0

for i in range(0, 600851475143, 1):
    for j in range(600851475143, 0, -1):
        if i*j == 600851475143:
            prime = True
            for k in range(2, i):
                if (i % k == 0):
                    prime = False
            if prime == True:
                primeNum = i
print(primeNum)
