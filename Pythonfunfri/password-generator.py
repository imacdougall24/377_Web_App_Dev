import random

SPECIALS = "!@#$%^&*()_+{}:\"<>?,./;'[]-=`~'|\\"

password = ""

char_use = 0
use_digit = 0
use_upper = 0
use_lower = 0
use_special = 0


include_digit = input("Include digits? [y/n]: ")
if include_digit == "y":
    char_use += 1
    use_digit = char_use

include_upper = input("Include UPPERCASE letters? [y/n]: ")
if include_upper == "y":
    char_use += 1
    use_upper = char_use

include_lower = input("Include lowercase letters? [y/n]: ")
if include_lower == "y":
    char_use += 1
    use_lower = char_use

include_special = input("Include special characters? [y/n]: ")
if include_special == "y":
    char_use += 1
    use_special = char_use


def num():
    digit = random.randint(0,9)
    return digit

def upperCase():
    letter = chr(ord("A") + random.randint(0, 25))
    return letter

def lowerCase():
    letter = chr(ord("a") + random.randint(0, 25))
    return letter

def special():
    special = SPECIALS[random.randint(0, 32)]
    return special

totalRange = input("How many characters long will your password be?")
for i in range(int(totalRange)):
    
    #  Finds random chartype and adds to password
    charType = random.randint(1, 4)
    if charType == use_digit:
        password += str(num())
    elif charType == use_upper:
        password += upperCase()
    elif charType == use_lower:
        password += lowerCase()
    elif charType == use_special:
        password += special()

print(password)



