fib1 = 1
fib2 = 1
tsfr = 0
totality = 0
while (fib2 < 4000000):
    if (fib2 % 2 == 0):
        totality += fib2
    tsfr = fib1
    fib1 = fib2
    fib2 += tsfr

print(str(totality))
